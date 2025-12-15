import * as z from 'zod';

export const CreateListValidator = z.object({
    boardId: z.uuid(),
    title: z.string().min(4).max(255),
    position: z.number().int().nonnegative(),
});

export const UpdateListValidator = z.object({
    title: z.string().min(4).max(255).optional(),
    position: z.number().int().nonnegative().optional(),
});

export const ListIdValidator = z.object({
    id: z.string().transform((val) => parseInt(val, 10)).refine((val) => !isNaN(val) && val > 0, {
        message: "ID must be a positive number",
    }),
});
