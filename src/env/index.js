import { z } from "zod";

import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
    DB_NAME: z.string(),
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    PORT: z.coerce.number,
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error(
        "❌ Invalid environment variables:",
        JSON.stringify(parsed.error.format(), null, 4)
    );
    process.exit(1);
}

export default parsed.data;
