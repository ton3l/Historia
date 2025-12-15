import * as z from 'zod';

export const UuidValidator = z.object({
    id: z.uuid(),
});