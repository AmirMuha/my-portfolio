export const PORT = process.env.PORT || 3333;
export const HOST = process.env.HOST || "localhost";
export const __prod__ = process.env.NODE_ENV === "production";
export const GRAPHQL_API: string = process.env.GRAPHQL_API_TOKEN!;
export const KEY_GENERATOR_SECRET: string = process.env.KEY_GENERATOR_SECRET!;
export const SESSION_SECRET: string = process.env.SESSION_SECRET!;
export const JWT_PRIVATE_KEY: string = process.env.JWT_PRIVATE_KEY!;
export const SESSION_MAX_AGE_DAYS: number = parseInt(
  process.env.SESSION_MAX_AGE_DAYS!
);
export const SESSION_MAX_AGE: number =
  SESSION_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;
