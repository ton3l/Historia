import { ValidationException } from '@domain/exceptions/validation.exception';
import type { List } from './list.entity';

interface ConstructorOptions {
    id?: number;
    title: string;
    lists?: Array<List>;
    updatedAt?: Date;
}

export interface CreateBoardOptions extends Omit<ConstructorOptions, 'id' | 'updatedAt'> {}

export interface RestoreBoardOptions extends ConstructorOptions {
    id: number;
    updatedAt: Date;
}

export class Board {
    private id?: number; // auto-increment ID
    private title: string;
    private lists: Array<List>;
    private updatedAt?: Date;

    constructor(options: ConstructorOptions) {
        const { id, title, lists, updatedAt } = options;
        this.id = id;
        this.title = title;
        this.lists = lists ? lists : [];
        this.updatedAt = updatedAt;
    }

    public static create(options: CreateBoardOptions): Board {
        const { title } = options;

        Board.validateTitle(title);

        const board = new Board({
            title,
        });

        board.setUpdate();

        return board;
    }

    public static restore(options: RestoreBoardOptions): Board {
        const { id, title, lists, updatedAt } = options;

        const board = new Board({
            id,
            title,
            lists,
            updatedAt,
        });

        return board;
    }

    private setUpdate(): void {
        this.updatedAt = new Date();
    }

    public setTitle(newTitle: string): void {
        Board.validateTitle(newTitle);
        this.title = newTitle;

        this.setUpdate();
    }

    private static validateTitle(title: string): void {
        if (!title) {
            throw new ValidationException({ message: 'Title is required', showValue: true, value: title });
        }
        if (title.length < 2) {
            throw new ValidationException({ message: 'Title must be at least 2 characters long', showValue: true, value: title });
        }
    }
}
