import { PrismaClientKnownRequestError } from '@prisma/internal/prismaNamespace';
import type { IUserRepository } from '@domain/repositories/user.repository';
import { RecordNotFoundException } from '../exceptions/notfound.exception';
import { validateEmail, validateUUID } from '@domain/utils/validators';
import { User } from '@domain/core/user.entity';
import { UserMapper } from './mappers/user.mapper';
import prisma from '@lib/prisma';

export class PrismaUserPersistence implements IUserRepository {
    constructor() {}

    async create(user: User): Promise<User> {
        const userPersistence = UserMapper.toPersistence(user);

        const newUser = await prisma.user.create({
            data: userPersistence,
        });

        return UserMapper.toDomain(newUser);
    }

    async findByEmail(email: string): Promise<User | null> {
        validateEmail(email);

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) return null;

        return UserMapper.toDomain(user);
    }

    async findById(id: string): Promise<User | null> {
        validateUUID(id);

        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) return null;

        return UserMapper.toDomain(user);
    }

    async update(user: User): Promise<User> {
        const userPersistence = UserMapper.toPersistence(user);

        try {
            const updatedUser = await prisma.user.update({
                where: {
                    id: userPersistence.id,
                },
                data: userPersistence,
            });

            return UserMapper.toDomain(updatedUser);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new RecordNotFoundException({ object: 'User', operation: 'Update' });
            }
            throw error;
        }
    }

    async delete(id: string): Promise<User> {
        validateUUID(id);
        
        try {
            const deletedUser = await prisma.user.delete({ 
                where: {
                    id,
                },
            })
    
            return UserMapper.toDomain(deletedUser);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
                throw new RecordNotFoundException({ object: 'User', operation: 'Delete' });
            }
            throw error;
        }
    }
}