/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://AI-Content-Generator-DB_owner:Q9G0VftTkWhE@ep-misty-sea-a5n54y47.us-east-2.aws.neon.tech/AI-Content-Generator-DB?sslmode=require",
  },
};
