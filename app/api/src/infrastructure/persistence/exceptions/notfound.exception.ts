import { InfrastructureException } from "@infrastructure/exceptions/infrastructure.exception";

export interface RecordNotFoundExceptionOptions {
    object: string;
    operation: string;
}

export class RecordNotFoundException extends InfrastructureException {
    constructor(options: RecordNotFoundExceptionOptions) {
        const { object, operation } = options;
        const exception = `RecordNotFoundException: The record for the given '${object}' was not found in the database during the '${operation}' operation`;

        super(exception);
    }
}