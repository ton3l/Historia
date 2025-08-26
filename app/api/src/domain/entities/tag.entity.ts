import ValidationException from "../exceptions/validation.exception";

export type CreateTagProps = {
    name: string,
    color: string
}

export type RestoreTagProps = {
    id: number
    name: string
    color: string
}

export default class Tag {
    private id!: number;
    private name!: string;
    private color!: string;

    constructor () {}

    public static create ( props: CreateTagProps ): Tag {
        const { name, color } = props

        if(!name) {
            throw new ValidationException("Name is required", true, name);
        }

        if(!color) {
            throw new ValidationException("Color is required", true, color);
        }

        Tag.validateColor(color);

        const tag = new Tag();

        Object.assign(tag, {
            id: null, // autoincrement ID
            name,
            color
        });

        return tag;
    }

    public static restore ( props: RestoreTagProps ): Tag {
        const { id, name, color } = props

        const tag = new Tag();

        Object.assign(tag, {
            id,
            name,
            color
        });

        return tag;
    }

    private static validateColor (color: string): void {
        const hexColorRegex = /^#?([A-Fa-f0-9]{6})$/;

        if (!hexColorRegex.test(color)){
            throw new ValidationException("Invalid HEX color format", true, color);
        }
    }

    public setName (name: string): void {
        if(!name) {
            throw new ValidationException("Name is required", true, name);
        }

        this.name = name;
    }

    public setColor (color: string): void {
        if(!color) {
            throw new ValidationException("Color is required", true, color);
        }

        Tag.validateColor(color);

        this.color = color;
    }
}
