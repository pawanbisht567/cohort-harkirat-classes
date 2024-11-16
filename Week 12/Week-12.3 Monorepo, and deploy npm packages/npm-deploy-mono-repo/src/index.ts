import { z } from "zod";

export const signupInputSchema = z.object({
    username: z.string(),
    password: z.string()
})
console.log('Hi hello')
export type SignupSchema = z.infer<typeof signupInputSchema>;