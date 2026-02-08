import "dotenv/config"; // carrega .env *antes* de ler qualquer variável
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(9090),
  DATABASE_URI: z.string().min(1),
  DATABASE_NAME: z.string().min(1),
});

export const env = envSchema.parse(process.env);
