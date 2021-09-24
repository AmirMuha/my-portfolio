import { createHmac } from "crypto";
import { KEY_GENERATOR_SECRET } from "../constants/environment-variables";
export const createApiKey = async () => {
  const hmac = createHmac("sha256", KEY_GENERATOR_SECRET);
  const key = hmac.digest("base64");
  return key;
};
