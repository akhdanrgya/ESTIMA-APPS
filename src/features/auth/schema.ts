import { z } from "zod";
export const loginSchema = z.object({
  email: z.email("Enter a valid corporate email address.").trim().toLowerCase(),
  password: z.string().min(1, "Enter your password.").max(128, "Password is too long."),
  rememberMe: z.boolean(),
});
export type LoginInput = z.infer<typeof loginSchema>;
