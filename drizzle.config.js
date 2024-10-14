/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:EWm85ZVzKFMP@ep-broad-feather-a1en4cc7.ap-southeast-1.aws.neon.tech/neondb?sslmode=require",
  },
};
