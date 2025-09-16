import { ValidationException } from '../exceptions/validation.exception';

export interface CreateTagOptions {
    name: string;
    color: string;
}

export interface RestoreTagOptions {
    id: number;
    name: string;
    color: string;
}

interface ConstructorOptions {
    id?: number;
    name: string;
    color: string;
}

export class Tag {
    private id?: number; // autoincrement ID
    private name: string;
    private color: string;

    constructor(options: ConstructorOptions) {
        const { id, name, color } = options;
        this.id = id;
        this.name = name;
        this.color = color;
    }

    public static create(options: CreateTagOptions): Tag {
        const { name, color } = options;

        Tag.validateName(name);
        Tag.validateColor(color);

        const tag = new Tag({
            name,
            color,
        });

        return tag;
    }

    public static restore(options: RestoreTagOptions): Tag {
        const { id, name, color } = options;

        const tag = new Tag({
            id,
            name,
            color,
        });

        return tag;
    }

    public setName(name: string): void {
        if (!name) {
            throw new ValidationException({message: 'Name is required', showValue: true, value: name});
        }

        this.name = name;
    }

    public setColor(color: string): void {
        if (!color) {
            throw new ValidationException({message: 'Color is required', showValue: true, value: color});
        }

        Tag.validateColor(color);

        this.color = color;
    }

    private static validateName(name: string): void {
        if (!name) {
            throw new ValidationException({message: 'Name is required', showValue: true, value: name});
        }
    }

    private static validateColor(color: string): void {
        if (!color) {
            throw new ValidationException({message: 'Color is required', showValue: true, value: color});
        }

        const hexColorRegex = /^#?([A-Fa-f0-9]{6})$/;

        if (!hexColorRegex.test(color)) {
            throw new ValidationException({message: 'Invalid HEX color format', showValue: true, value: color});
        }
    }
}
