import type { Board as BoardEntity } from '@historia/api/src/domain/core/board.entity';
import type { Prisma } from '@historia/api/src/generated/client';

export type Board = BoardEntity;
export type { Prisma };