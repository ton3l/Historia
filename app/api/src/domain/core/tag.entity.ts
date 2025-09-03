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
    id?: number;
    name: string;
    color: string;
};

export default class Tag {
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
            color
        });

        return tag;
    }

    public static restore(options: RestoreTagOptions): Tag {
        const { id, name, color } = options;

        const tag = new Tag({
            id,
            name,
            color
        });
        
        return tag;
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

    private static validateName(name: string): void {
        if (!name) {
            throw new ValidationException('Name is required', true, name);
        }
    }

    private static validateColor(color: string): void {
        if (!color) {
            throw new ValidationException('Color is required', true, color);
        }

        const hexColorRegex = /^#?([A-Fa-f0-9]{6})$/;

        if (!hexColorRegex.test(color)) {
            throw new ValidationException('Invalid HEX color format', true, color);
        }
    }
}
