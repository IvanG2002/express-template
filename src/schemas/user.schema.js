import { z } from "zod"

export const UserSchemaLogin = z.object({
    username: z.string().min(5, 'Username must be at least 5 characters'),
    password: z.string().min(8, 'Password must contain at least 8 characters'),
});
export const UserSchemaRegister = z.object({
    username: z.string().min(5, 'Username must be at least 5 characters'),
    password: z.string().min(8, 'Password must contain at least 8 characters'),
    email: z.string().email('Invalid email format')
});
