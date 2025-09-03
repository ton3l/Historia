import ValidationException from '../exceptions/validation.exception';

export type CreateBoardOptions = {
    title: string;
};

export type RestoreBoardOptions = CreateBoardOptions & {
    id: number;
    updatedAt: Date;
};

type ConstructorOptions = {
    id: number | null;
    title: string;
    updatedAt: Date;
};

export default class Board {
    id: number | null;
    title: string;
    updatedAt: Date;

    constructor(options: ConstructorOptions) {
        const { id, title, updatedAt } = options;
        this.id = id;
        this.title = title;
        this.updatedAt = updatedAt;
    }

    public static create(options: CreateBoardOptions): Board {
        const { title } = options;

        if (!title) {
            throw new ValidationException('Title is required', true, title);
        }

        const board = new Board({
            id: null, // autoincrement ID
            title,
            updatedAt: new Date()
        });

        return board;
    }

    public static restore(options: RestoreBoardOptions): Board {
        const { id, title, updatedAt } = options;

        const board = new Board({
            id,
            title,
            updatedAt
        });

        return board;
    }

    private setNewUpdate(): void {
        this.updatedAt = new Date();
    }

    public setTitle(title: string): void {
        if (!title) {
            throw new ValidationException('Title is required', true, title);
        }
        this.title = title;
        this.setNewUpdate();
    }
}
