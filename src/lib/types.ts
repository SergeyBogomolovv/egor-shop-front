import { z } from "zod";

export const ticketSchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.string(),
  description: z.string(),
  imageUrl: z.nullable(z.string()),
});

export type Ticket = z.infer<typeof ticketSchema>;

export type User = {
  id: string;
  name: string;
  role: string;
};
