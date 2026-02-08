import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(9090),
  DATABASE_URI: z.string().min(1),
  DATABASE_NAME: z.string().min(1),
});

export const env = envSchema.parse(process.env);
