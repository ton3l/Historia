import { ApplicationException } from "@application/exceptions/application.exception";

export interface AccountExceptionOptions {
    message: string;
}

export class AccountException extends ApplicationException {
    constructor(options: AccountExceptionOptions) {
        const { message } = options;
        const exception = `AccountException: ${message}`;
        super(exception);
    }
}
