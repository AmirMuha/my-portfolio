"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CountAdmins = async ({ context: { data, prisma } }, next) => {
    const numberOfAdmins = await prisma.admin.count({});
    data.numberOfAdmins = numberOfAdmins;
    return next();
};
exports.default = CountAdmins;
//# sourceMappingURL=CountAdmins.js.map