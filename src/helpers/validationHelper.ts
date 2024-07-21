import { z } from 'zod';

export const postValidation = z.object({
    title: z
        .string()
        .min(1, 'Title is required')
        .max(100, 'Title must be at most 100 characters'),
    body: z
        .string()
        .min(1, 'Body is required')
        .max(500, 'Body must be at most 500 characters'),
});
