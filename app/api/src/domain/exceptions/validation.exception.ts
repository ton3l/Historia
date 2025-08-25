import DomainException from "./domain.exception";

export default class ValidationException extends DomainException {
    constructor(message: string, showValue: boolean, value?: any) {
        const exception = `ValidationException: ${message}${ showValue ? ` - Provided value: ${ value }` : '' }`;
        super(exception);
    }
}
