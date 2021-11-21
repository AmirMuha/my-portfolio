"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isLoggedIn = async ({ context: { data, req, prisma }, args, info, root }, next) => {
    const operation = info.fieldName;
    if (operation.includes("create") ||
        operation.includes("update") ||
        operation.includes("delete")) {
        if (args.data && args.data.admin && !args.data.admin.connect) {
            throw new Error("You cannot create a new admin or manipulate it.");
        }
    }
    const token = req.session.token;
    if (!token) {
        throw new Error("Either your session exprired or you are not logged in.");
    }
    const verifiedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_PRIVATE_KEY, {
        complete: true,
    });
    if (!verifiedToken.payload.id) {
        throw new Error("Either your session exprired or you are not logged in.");
    }
    const admin = await prisma.admin.findUnique({
        where: { id: verifiedToken.payload.id },
    });
    if (!admin)
        throw new Error("Either your session exprired or you are not logged in.");
    data.admin = admin;
    data.args = args;
    data.info = info;
    data.root = root;
    data.userId = verifiedToken.payload.id;
    return next();
};
exports.isLoggedIn = isLoggedIn;
//# sourceMappingURL=isLoggedIn.js.map