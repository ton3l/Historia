import * as z from 'zod';

export const RegisterFormValidator = z.object({
    username: z.string().max(20),
    email: z.email(),
    rawPassword: z.string().max(20),
});