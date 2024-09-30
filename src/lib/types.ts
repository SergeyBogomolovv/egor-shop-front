import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.string(),
  description: z.string(),
  imageUrl: z.nullable(z.string()),
});

export type Product = z.infer<typeof productSchema>;

export type User = {
  id: string;
  name: string;
  role: string;
};
