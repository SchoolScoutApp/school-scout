import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_END_POINT: z.string(),
  NEXT_PUBLIC_ABSOLUTE_PATH: z.string(),
  NEXT_PUBLIC_IS_MOCK: z.string(),
});

envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
