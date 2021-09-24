export const PORT = process.env.PORT || 3333;
export const HOST = process.env.HOST || "localhost";
export const __prod__ = process.env.NODE_ENV === "production";
export const ENV: string = process.env.NODE_ENV!;
export const GRAPHQL_API: string = process.env.GRAPHQL_API_TOKEN!;
export const KEY_GENERATOR_SECRET: string = process.env.KEY_GENERATOR_SECRET!;
export const SESSION_SECRET: string = process.env.SESSION_SECRET!;
export const JWT_PRIVATE_KEY: string = process.env.JWT_PRIVATE_KEY!;
export const SESSION_MAX_AGE_DAYS: number = parseInt(
  process.env.SESSION_MAX_AGE_DAYS!
);
export const SESSION_MAX_AGE: number =
  SESSION_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

export const EMAIL_HOST: string = process.env.EMAIL_HOST!;
export const EMAIL_PORT: number = parseInt(process.env.EMAIL_PORT!);
export const EMAIL_USERNAME: string = process.env.EMAIL_USERNAME!;
export const EMAIL_PASSWORD: string = process.env.EMAIL_PASSWORD!;
export const MY_EMAIL: string = process.env.MY_EMAIL!;
export const EMAIL_CONFIRMATION_TOKEN: string = "CONFIRMATION-TOKEN";
export const EMAIL_CONFIRMATION_CODE: string = "CONFIRMATION-CODE";
