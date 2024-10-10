
/** @type { import("drizzle-kit").Config} */
export default {
    schema: "./utils/schema.js",
    dialect: "postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:TMmW9YGFl5vg@ep-weathered-breeze-a5hgvsam.us-east-2.aws.neon.tech/ai-interviewer?sslmode=require',
    }
};