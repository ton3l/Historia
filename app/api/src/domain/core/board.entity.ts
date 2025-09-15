import ValidationException from '../exceptions/validation.exception';

export interface CreateBoardOptions {
    title: string;
};

export interface RestoreBoardOptions extends CreateBoardOptions {
    id: number;
    updatedAt: Date;
};

interface ConstructorOptions {
    id?: number;
    title: string;
    updatedAt: Date;
};

export default class Board {
    private id?: number; // auto-increment ID
    private title: string;
    private updatedAt: Date;

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
            updatedAt: new Date(),
        });

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

    public setTitle(title: string): void {
        Board.validateTitle(title);
        this.title = title;
        this.setUpdate();
    }

    private static validateTitle(title: string): void {
        if (!title) {
            throw new ValidationException('Title is required', true, title);
        }
        if (title.length < 2) {
            throw new ValidationException('Title must be at least 2 characters long', true, title);
        }
    }
}
