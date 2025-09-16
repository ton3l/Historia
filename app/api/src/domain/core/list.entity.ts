import { ValidationException } from '../exceptions/validation.exception';
import { Task } from './task.entity';

export interface CreateListOptions {
    title: string;
    position: number;
}

export interface RestoreListOptions extends CreateListOptions {
    id: number;
    tasks: Array<Task>;
}

interface ConstructorOptions {
    id?: number;
    title: string;
    position: number;
    tasks: Array<Task>;
}

export class List {
    private id?: number; // auto-increment ID
    private title: string;
    public position: number;
    private tasks: Array<Task>;

    constructor(options: ConstructorOptions) {
        const { id, title, position, tasks } = options;
        this.id = id;
        this.title = title;
        this.tasks = tasks;
        this.position = position;
    }

    public static create(options: CreateListOptions): List {
        const { title, position } = options;

        List.validateTitle(title);

        const list = new List({
            title,
            tasks: [],
            position,
        });

        return list;
    }

    public static restore(options: RestoreListOptions): List {
        const { id, title, position, tasks } = options;

        const list = new List({
            id,
            title,
            tasks,
            position,
        });

        return list;
    }

    public setTitle(title: string): void {
        List.validateTitle(title);
        this.title = title;
    }

    public setPosition(newPosition: number): void {
        List.validatePosition(newPosition);
        this.position = newPosition;
    }

    private static validateTitle(title: string): void {
        if (!title) {
            throw new ValidationException({message: 'Title is required', showValue: true, value: title});
        }
        if (title.length < 4) {
            throw new ValidationException({message: 'Title must be at least 4 characters long', showValue: true, value: title});
        }
    }

    private static validatePosition(position: number): void {
        if (!position) {
            throw new ValidationException({message: 'Position is required', showValue: true, value: position});
        }
        if (position < 0) {
            throw new ValidationException({message: 'Position must be a positive number', showValue: true, value: position});
        }
    }
}
