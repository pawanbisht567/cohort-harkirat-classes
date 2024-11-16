import { z } from "zod";

export const signupInput = z.object({
    username: z.string(),
    password: z.string()
});

export type SignupParams = z.infer<typeof signupInput>;

let n : number [] = [12,2,3,4,5,];
console.log(n)