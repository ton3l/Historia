import { ValidationException } from '../exceptions/validation.exception';
import type { Tag } from './tag.entity';

export interface CreateTaskOptions {
    title: string;
    note: string;
    position: number;
    dueDate: Date;
    tags: Array<Tag>;
}

interface ConstructorOptions {
    id?: number;
    title: string;
    note: string;
    position: number;
    dueDate: Date;
    tags: Array<Tag>;
}

export class Task {
    private id?: number;
    private title: string;
    private note: string;
    private position: number;
    private dueDate: Date;
    private tags: Array<Tag>;

    constructor(options: ConstructorOptions) {
        const { id, title, note, position, dueDate, tags } = options;
        this.id = id;
        this.title = title;
        this.note = note;
        this.position = position;
        this.dueDate = dueDate;
        this.tags = tags;
    }

    public static create(options: CreateTaskOptions): Task {
        const { title, note, position, dueDate, tags } = options;

        const task = new Task({
            title,
            note,
            position,
            dueDate,
            tags,
        });

        return task;
    }

    private static validateTitle(title: string): void {
        if (!title) {
            throw new ValidationException({message: 'Title is required', showValue: true, value: title});
        }
    }
}
