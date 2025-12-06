import * as z from 'zod';

export const SignInFormValidator = z.object({
    username: z.string().max(20),
    email: z.email(),
    rawPassword: z.string().max(20),
});

export const LogInValidator = z.object({
    email: z.email(),
    rawPassword: z.string().max(20),
});