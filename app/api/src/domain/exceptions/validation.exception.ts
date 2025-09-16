import { DomainException } from "./domain.exception";

export interface ValidationExceptionOptions {
    message: string;
    showValue: boolean;
    value?: any;
}

export class ValidationException extends DomainException {
    constructor(options: ValidationExceptionOptions) {
        const { message, showValue, value } = options;
        const exception = `ValidationException: ${message}${ showValue ? ` - Provided value: ${ value }` : '' }`;
        super(exception);
    }
}
