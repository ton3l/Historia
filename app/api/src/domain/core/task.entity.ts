import { ValidationException } from '@domain/exceptions/validation.exception';
import type { Tag } from './tag.entity';

interface ConstructorOptions {
    id?: number;
    title: string;
    note: string;
    position: number;
    dueDate?: Date;
    tags?: Array<Tag>;
}

export interface CreateTaskOptions extends Omit<ConstructorOptions, 'id' | 'tags'> {}

export interface RestoreTaskOptions extends ConstructorOptions {
    id: number;
}

export class Task {
    private id?: number; // autoincrement ID
    private title: string;
    private note: string;
    private position: number;
    private dueDate: Date | null;
    private tags: Array<Tag>;

    constructor(options: ConstructorOptions) {
        const { id, title, note, position, dueDate, tags } = options;
        this.id = id;
        this.title = title;
        this.note = note;
        this.position = position;
        this.dueDate = dueDate ? dueDate : null;
        this.tags = tags ? tags : [];
    }

    public static create(options: CreateTaskOptions): Task {
        const { title, note, position, dueDate } = options;

        Task.validateTitle(title);

        const task = new Task({
            title,
            note,
            position,
            dueDate,
        });

        return task;
    }

    public static restore(options: RestoreTaskOptions): Task {
        const { id, title, note, position, dueDate, tags } = options;

        const task = new Task({
            id,
            title,
            note,
            position,
            dueDate,
            tags,
        });

        return task;
    }

    public setTitle(newTitle: string): void {
        Task.validateTitle(newTitle);
        this.title = newTitle;
    }

    public setPosition(newPosition: number): void {
        Task.validatePosition(newPosition);
        this.position = newPosition;
    }

    public setDueDate(newDueDate: Date): void {
        Task.validateDueDate(newDueDate);
        this.dueDate = newDueDate;
    }

    public setNote(newNote: string): void {
        Task.validateNote(newNote);
        this.note = newNote;
    }

    public addTag(tag: Tag): void {
        this.tags.push(tag);
    }

    private static validateTitle(title: string): void {
        if (!title) {
            throw new ValidationException({ message: 'Title is required', showValue: true, value: title });
        }
        if (title.length < 2) {
            throw new ValidationException({ message: 'Title must be at least 2 characters long', showValue: true, value: title });
        }
    }

    private static validateDueDate(dueDate: Date): void {
        if (!dueDate) {
            throw new ValidationException({ message: 'Due date is required', showValue: true, value: dueDate });
        }
        if (dueDate < new Date()) {
            throw new ValidationException({ message: 'Due date must be in the future', showValue: true, value: dueDate });
        }
    }

    private static validatePosition(position: number): void {
        if (!position) {
            throw new ValidationException({ message: 'Position is required', showValue: true, value: position });
        }
        if (position < 0) {
            throw new ValidationException({ message: 'Position must be a positive number', showValue: true, value: position });
        }
    }

    private static validateNote(note: string): void {
        if (!note) {
            throw new ValidationException({ message: 'Note is required', showValue: true, value: note });
        }
    }
}
