import * as z from 'zod';

export const CreateBoardValidator = z.object({
    title: z.string().max(20),
}); 

export const GetBoardValidator = z.object({
    id: z.uuid(),
});