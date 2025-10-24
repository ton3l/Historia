import { ValidationException } from "@domain/exceptions/validation.exception";
import { validate as uuidValidate } from "uuid";

export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new ValidationException({ message: 'Invalid email format', showValue: true, value: email });
    }

    return true;
}

export function validateUUID(uuid: string): boolean {
    if (!uuidValidate(uuid)){
        throw new ValidationException({ message: 'Invalid UUID format', showValue: true, value: uuid });
    }

    return true;
}