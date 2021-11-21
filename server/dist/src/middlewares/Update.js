"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update = void 0;
const Update = async ({ context: { prisma, data }, }) => {
    const model = data.info.fieldName.split("update")[1].toLocaleLowerCase();
    const s = prisma;
    const as = s[model];
    const up = as.update;
    const updatedValue = await up({
        data: data.args.data,
        where: {
            id: data.args.where.id,
        },
    });
    return updatedValue;
};
exports.Update = Update;
//# sourceMappingURL=Update.js.map