import { z } from "zod";
export const projectInputSchema = z.object({
  code: z.string().trim().min(2).max(40), name: z.string().trim().min(3).max(200),
  client: z.string().trim().min(2).max(200), location: z.string().trim().max(200).optional(),
});
