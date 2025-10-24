import type { User } from "@domain/core/user.entity";

export class UserMapper {
    constructor() {}

    static toPersistence(user: User) {
        const userAttrs = user.toJSON();
        return {
            id: userAttrs.id,
            name: userAttrs.name,
            email: userAttrs.email,
            password: userAttrs.password!
        };
    }
}