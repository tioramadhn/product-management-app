import { z } from "zod";
import { variationSchema } from "./variationSchema";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  sku: z.string().min(1, "SKU is required"),
  brand: z.string().min(1, "Brand is required"),
  description: z.string().min(1, "Description is required"),
  variations: z
    .array(variationSchema)
    .min(1, "At least one variation is required"),
});
