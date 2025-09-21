import { ValidationException } from '../exceptions/validation.exception';

interface ConstructorOptions {
    id?: number;
    title: string;
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
    private updatedAt?: Date;

    constructor(options: ConstructorOptions) {
        const { id, title, updatedAt } = options;
        this.id = id;
        this.title = title;
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
        const { id, title, updatedAt } = options;

        const board = new Board({
            id,
            title,
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
