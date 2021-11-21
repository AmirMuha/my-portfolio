"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiKey = void 0;
const crypto_1 = require("crypto");
const createApiKey = async () => {
    const hmac = (0, crypto_1.createHmac)("sha256", process.env.KEY_GENERATOR_SECRET);
    const key = hmac.digest("base64");
    return key;
};
exports.createApiKey = createApiKey;
//# sourceMappingURL=getprivatekey.js.map