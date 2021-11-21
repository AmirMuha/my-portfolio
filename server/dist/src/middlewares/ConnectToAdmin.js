"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectToAdmin = void 0;
const ConnectToAdmin = async ({ context: { prisma, data }, args, }) => {
    const model = data.info.fieldName.split("create")[1].toLocaleLowerCase();
    const s = prisma;
    const as = s[model];
    const cr = as.create;
    const project = await cr({
        data: Object.assign(Object.assign({}, args.data), { admin: {
                connect: {
                    email: data.admin.email,
                },
            } }),
    });
    return project;
};
exports.ConnectToAdmin = ConnectToAdmin;
//# sourceMappingURL=ConnectToAdmin.js.map