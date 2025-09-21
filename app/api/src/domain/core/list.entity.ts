import { ValidationException } from '@domain/exceptions/validation.exception';
import { Task } from './task.entity';

interface ConstructorOptions {
    id?: number;
    title: string;
    position: number;
    tasks?: Array<Task>;
}

export interface CreateListOptions extends Omit<ConstructorOptions, 'id' | 'tasks'> {}

export interface RestoreListOptions extends ConstructorOptions {
    id: number;
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
        this.tasks = tasks ? tasks : [];
        this.position = position;
    }

    public static create(options: CreateListOptions): List {
        const { title, position } = options;

        List.validateTitle(title);

        const list = new List({
            title,
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

    public setTitle(newTitle: string): void {
        List.validateTitle(newTitle);
        this.title = newTitle;
    }

    public setPosition(newPosition: number): void {
        List.validatePosition(newPosition);
        this.position = newPosition;
    }

    public addTask(task: Task): void {
        this.tasks.push(task);
    }

    private static validateTitle(title: string): void {
        if (!title) {
            throw new ValidationException({ message: 'Title is required', showValue: true, value: title });
        }
        if (title.length < 4) {
            throw new ValidationException({ message: 'Title must be at least 4 characters long', showValue: true, value: title });
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
}
