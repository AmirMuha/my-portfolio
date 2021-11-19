import { createHmac } from "crypto";
export const createApiKey = async () => {
  const hmac = createHmac("sha256", process.env.KEY_GENERATOR_SECRET!);
  const key = hmac.digest("base64");
  return key;
};
