import { z } from "zod";

export const pollSchema = z.object({
  id: z.string(),
  title: z.string(),
  question1: z.string(),
  question2: z.nullable(z.string()),
  question3: z.nullable(z.string()),
  question4: z.nullable(z.string()),
  answered: z.number(),
});

export type Poll = z.infer<typeof pollSchema>;

export const answerSchema = z.object({
  id: z.string(),
  answer1: z.string(),
  answer2: z.nullable(z.string()),
  answer3: z.nullable(z.string()),
  answer4: z.nullable(z.string()),
  email: z.string(),
  user: z.object({
    name: z.string(),
    role: z.string(),
  }),
  poll: z.object({
    title: z.string(),
    question1: z.string(),
    question2: z.nullable(z.string()),
    question3: z.nullable(z.string()),
    question4: z.nullable(z.string()),
  }),
});

export type Answer = z.infer<typeof answerSchema>;

export type User = {
  id: string;
  name: string;
  role: string;
};
