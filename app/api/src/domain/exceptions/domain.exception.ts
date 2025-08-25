export default class DomainException extends Error {
    constructor(message: string) {
        const exception = `${message}`;
        super(exception);
    }
}
