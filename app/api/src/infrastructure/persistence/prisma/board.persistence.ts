import { RecordNotFoundException } from '@infrastructure/persistence/exceptions/notfound.exception';
import type { BoardRepository, CreateBoardOptions } from '@domain/repositories/board.repository';
import { BoardMapper } from '@infrastructure/persistence/prisma/mappers/board.mapper';
import { PrismaClientKnownRequestError } from '@prisma/internal/prismaNamespace';
import { validateUUID } from '@domain/utils/validators';
import type { Board } from '@domain/core/board.entity';
import prisma from '@lib/prisma';

export class PrismaBoardPersistence implements BoardRepository {
    async create(options: CreateBoardOptions): Promise<Board> {
        const { board, creatorId } = options;
        const boardPersistence = BoardMapper.toPersistence(board);

        const newBoard = await prisma.board.create({
            data: boardPersistence,
        });

        await prisma.board_user.create({ data: { board_id: newBoard.id, user_id: creatorId, role: 'adm' } });

        return BoardMapper.toDomain(newBoard);
    }

    async findById(id: string): Promise<Board | null> {
        validateUUID(id);

        const board = await prisma.board.findUnique({
            where: {
                id,
            },
        });

        if (!board) return null;

        return BoardMapper.toDomain(board);
    }

    async findByUser(id: string): Promise<Board[] | null> {
        validateUUID(id);

        const boards = await prisma.board.findMany({
            where: {
                Board_user: {
                    some: {
                        user_id: id,
                    },
                },
            }
        });

        return boards.map((board) => BoardMapper.toDomain(board));
    }

    async update(board: Board): Promise<Board> {
        const boardPersistence = BoardMapper.toPersistence(board);

        try {
            const updatedBoard = await prisma.board.update({
                where: {
                    id: boardPersistence.id,
                },
                data: boardPersistence,
            });

            return BoardMapper.toDomain(updatedBoard);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new RecordNotFoundException({ object: 'Board', operation: 'Update' });
            }
            throw error;
        }
    }

    async delete(id: string): Promise<Board> {
        validateUUID(id);

        try {
            const deletedBoard = await prisma.board.delete({
                where: {
                    id,
                },
            });

            return BoardMapper.toDomain(deletedBoard);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new RecordNotFoundException({ object: 'Board', operation: 'Delete' });
            }
            throw error;
        }
    }
}
