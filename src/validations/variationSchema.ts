import { z } from "zod";

export const variationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  sku: z.string().min(1, "SKU is required"),
  price: z.number().min(0, "Price must be a positive number"),
});
