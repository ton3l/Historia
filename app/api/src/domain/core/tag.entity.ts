import ValidationException from '../exceptions/validation.exception';

export type CreateTagOptions = {
    name: string;
    color: string;
};

export type RestoreTagOptions = {
    id: number;
    name: string;
    color: string;
};

type ConstructorOptions = {
    id: number | null;
    name: string;
    color: string;
};

export default class Tag {
    private id: number | null;
    private name: string;
    private color: string;

    constructor(options: ConstructorOptions) {
        const { id, name, color } = options;
        this.id = id; // autoincrement ID
        this.name = name;
        this.color = color;
    }

    public static create(options: CreateTagOptions): Tag {
        const { name, color } = options;

        if (!name) {
            throw new ValidationException('Name is required', true, name);
        }

        if (!color) {
            throw new ValidationException('Color is required', true, color);
        }

        Tag.validateColor(color);

        const tag = new Tag({
            id: null,
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

    private static validateColor(color: string): void {
        const hexColorRegex = /^#?([A-Fa-f0-9]{6})$/;

        if (!hexColorRegex.test(color)) {
            throw new ValidationException('Invalid HEX color format', true, color);
        }
    }

    public setName(name: string): void {
        if (!name) {
            throw new ValidationException('Name is required', true, name);
        }

        this.name = name;
    }

    public setColor(color: string): void {
        if (!color) {
            throw new ValidationException('Color is required', true, color);
        }

        Tag.validateColor(color);

        this.color = color;
    }
}
