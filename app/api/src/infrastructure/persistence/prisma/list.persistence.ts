import { RecordNotFoundException } from '@infrastructure/persistence/exceptions/notfound.exception';
import type { ListRepository, CreateListOptions } from '@domain/repositories/list.repository';
import { ListMapper } from '@infrastructure/persistence/prisma/mappers/list.mapper';
import { PrismaClientKnownRequestError } from '@prisma/internal/prismaNamespace';
import { validateUUID } from '@domain/utils/validators';
import type { List } from '@domain/core/list.entity';
import prisma from '@lib/prisma';

export class PrismaListPersistence implements ListRepository {
    async create(options: CreateListOptions): Promise<List> {
        const { list, boardId } = options;
        validateUUID(boardId);
        
        const listPersistence = ListMapper.toPersistence(list);
        
        // Remove id if it is undefined so Prisma uses default/autoincrement
        const { id, ...dataWithoutId } = listPersistence;

        const newList = await prisma.list.create({
            data: {
                ...dataWithoutId,
                board_id: boardId,
            },
        });

        return ListMapper.toDomain(newList);
    }

    async findById(id: number): Promise<List | null> {
        const list = await prisma.list.findUnique({
            where: {
                id,
            },
        });

        if (!list) return null;

        return ListMapper.toDomain(list);
    }

    async findByBoardId(boardId: string): Promise<List[] | null> {
        validateUUID(boardId);

        const lists = await prisma.list.findMany({
            where: {
                board_id: boardId,
            },
            orderBy: {
                position: 'asc',
            }
        });

        return lists.map((list) => ListMapper.toDomain(list));
    }

    async update(list: List): Promise<List> {
        const listPersistence = ListMapper.toPersistence(list);

        try {
            const updatedList = await prisma.list.update({
                where: {
                    id: listPersistence.id,
                },
                data: listPersistence,
            });

            return ListMapper.toDomain(updatedList);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new RecordNotFoundException({ object: 'List', operation: 'Update' });
            }
            throw error;
        }
    }

    async delete(id: number): Promise<List> {
        try {
            const deletedList = await prisma.list.delete({
                where: {
                    id,
                },
            });

            return ListMapper.toDomain(deletedList);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new RecordNotFoundException({ object: 'List', operation: 'Delete' });
            }
            throw error;
        }
    }
}
