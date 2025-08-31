import ValidationException from "../exceptions/validation.exception";

export type CreateBoardProps = {
    title: string;
}

export type RestoreBoardProps = CreateBoardProps & {
    id: number;
    updatedAt: Date;
}

export default class Board {
    id!: number;
    title!: string;
    updatedAt!: Date;

    constructor () {}

    public static create (props: CreateBoardProps): Board  {
        const { title } = props;

        if(!title) {
            throw new ValidationException("Title is required", true, title);
        }

        const board = new Board();

        Object.assign(board, {
            id: null, // autoincrement ID
            title,
            updatedAt: new Date()
        });

        return board;
    }

    public static restore (props: RestoreBoardProps): Board {
        const { id, title, updatedAt } = props;

        const board = new Board();

        Object.assign(board, {
            id,
            title,
            updatedAt
        });

        return board;
    }

    private setNewUpdate () : void {
        this.updatedAt = new Date();
    }

    public setTitle (title: string): void {
        if(!title) {
            throw new ValidationException("Title is required", true, title);
        }
        this.title = title;
        this.setNewUpdate();
    }
}