import { z } from "zod";

export const pollSchema = z.object({
  id: z.string(),
  title: z.string(),
  question: z.string(),
  answered: z.number(),
});

export type Poll = z.infer<typeof pollSchema>;

export type User = {
  id: string;
  name: string;
  role: string;
};
