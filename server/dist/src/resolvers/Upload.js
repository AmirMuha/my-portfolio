"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadResolver = void 0;
const crypto_1 = require("crypto");
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = require("fs");
const graphql_upload_1 = require("graphql-upload");
const path_1 = __importStar(require("path"));
const type_graphql_1 = require("type-graphql");
const archiver_1 = __importDefault(require("archiver"));
let UploadResolver = class UploadResolver {
    async uploadFilesToZip(files, isEdit = true) {
        const zipName = `zip-${(0, crypto_1.randomInt)(100000)}.zip`;
        const promises = [];
        const wStream = (0, fs_1.createWriteStream)(path_1.default.join(__dirname, `../uploads${isEdit ? "/" : "/temp/"}`, zipName));
        const archive = (0, archiver_1.default)("zip", { zlib: { level: 9 } });
        archive.pipe(wStream);
        for (const file of files) {
            const { createReadStream, mimetype } = await file;
            const stream = createReadStream();
            const promise = new Promise((resolve, reject) => {
                let filename = `file-${(0, crypto_1.randomInt)(100000)}.${mimetype.split("/")[1]}`;
                if (filename.includes("+")) {
                    filename = filename.replace("+xml", "");
                }
                archive.append(stream, { name: filename });
                wStream.on("error", (e) => {
                    console.error(e.message);
                    reject(false);
                    throw new Error(e.message);
                });
                archive.on("finish", () => {
                    resolve(true);
                });
                archive.on("error", (e) => {
                    console.error(e.message);
                    reject(false);
                });
            });
            promises.push(promise);
        }
        archive.finalize();
        return Promise.all(promises)
            .then(() => {
            return zipName;
        })
            .catch((e) => {
            console.error(e);
            throw new Error("Something went wrong, couldn't upload all files.");
        });
    }
    async updateZipFile({ prisma }, prevname, isTemp, files) {
        try {
            (0, fs_1.unlinkSync)(path_1.default.join(__dirname, `../uploads/${isTemp ? "temp/" : ""}`, prevname));
        }
        catch (e) {
            throw new Error("Something went wrong, Couldn't create new zip file.");
        }
        const promises = [];
        const archive = (0, archiver_1.default)("zip", { zlib: { level: 9 } });
        const wStream = (0, fs_1.createWriteStream)(path_1.default.join(__dirname, `../uploads/${isTemp ? "temp/" : ""}`, prevname));
        wStream.on("error", (e) => {
            throw new Error(e.message || "Something went wrong with creating new .zip file.");
        });
        archive.pipe(wStream);
        for (const file of files) {
            const { createReadStream, mimetype } = await file;
            const stream = createReadStream();
            let filename = `file-${(0, crypto_1.randomInt)(100000)}.${mimetype.split("/")[1]}`;
            if (filename.includes("+")) {
                filename = filename.replace("+xml", "");
            }
            const promise = new Promise((resolve, reject) => {
                archive.append(stream, { name: filename });
                archive.on("finish", () => {
                    resolve(filename);
                });
                archive.on("error", () => {
                    reject(false);
                });
            });
            promises.push(promise);
        }
        archive.finalize();
        return Promise.all(promises)
            .then(() => {
            return prevname;
        })
            .catch(() => {
            throw new Error("Something went wrong, couldn't update the .zip file.");
        });
    }
    async moveFilesFromTemp(filenames) {
        for (const file of filenames) {
            (0, fs_1.rename)(path_1.default.join(__dirname, "../uploads/temp/", file), path_1.default.join(__dirname, "../uploads/", file), (e) => {
                if (e) {
                    throw new Error("Something went wrong, Couldn't update the file path.");
                }
            });
        }
        return true;
    }
    async uploadSingleFile({ mimetype, createReadStream }, isEdit) {
        let filename = `file-${(0, crypto_1.randomInt)(100000)}.webp`;
        return new Promise((resolve, reject) => {
            const stream = createReadStream();
            if (mimetype.split("/")[0] === "image") {
                stream
                    .pipe((0, sharp_1.default)()
                    .webp({
                    quality: 50,
                })
                    .on("error", (e) => {
                    throw new Error(e.message || "Couldn't prccess the uploaded image.");
                }))
                    .pipe((0, fs_1.createWriteStream)(path_1.default.join(__dirname, `../../src/uploads/${isEdit ? "" : "temp/"}`, filename)))
                    .on("error", (e) => {
                    console.error(e);
                    reject(e);
                })
                    .on("finish", () => resolve(filename));
            }
            else {
                stream
                    .pipe((0, fs_1.createWriteStream)(path_1.default.join(__dirname, `../../src/uploads/${isEdit ? "" : "temp/"}`, filename)))
                    .on("error", (e) => {
                    console.error(e);
                    reject(e);
                })
                    .on("finish", () => resolve(filename));
            }
        });
    }
    async updateImage({ createReadStream }, prevname, isEdit) {
        try {
            (0, fs_1.unlinkSync)((0, path_1.join)(__dirname, `../uploads/${isEdit ? "" : "temp/"}` + prevname));
        }
        catch (e) { }
        return new Promise((resolve, reject) => {
            const stream = createReadStream();
            stream
                .pipe((0, sharp_1.default)()
                .webp({
                quality: 50,
            })
                .on("error", (e) => {
                throw new Error(e.message || "Couldn't prccess the uploaded image.");
            }))
                .pipe((0, fs_1.createWriteStream)(path_1.default.join(__dirname, `../uploads/${isEdit ? "" : "temp/"}`, prevname)))
                .on("error", (e) => {
                reject(e);
            })
                .on("finish", async () => {
                resolve(prevname);
            });
        });
    }
    async uploadMultipleFiles(files, isTemp = true) {
        var e_1, _a;
        const filenames = [];
        try {
            for (var files_1 = __asyncValues(files), files_1_1; files_1_1 = await files_1.next(), !files_1_1.done;) {
                const file = files_1_1.value;
                try {
                    const { mimetype, createReadStream } = await file;
                    let filename = `file-${(0, crypto_1.randomInt)(100000)}.${mimetype.split("/")[1]}`;
                    if (filename.includes("+")) {
                        filename = filename.replace("+xml", "");
                    }
                    const stream = createReadStream();
                    stream.pipe((0, fs_1.createWriteStream)(path_1.default.join(__dirname, `../../src/uploads/${isTemp ? "temp/" : ""}`, filename)));
                    filenames.push(filename);
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (files_1_1 && !files_1_1.done && (_a = files_1.return)) await _a.call(files_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return filenames;
    }
    async deleteFile(filename, isTemp) {
        try {
            (0, fs_1.unlinkSync)((0, path_1.join)(__dirname, `../uploads/${isTemp ? "temp/" : ""}` + filename));
        }
        catch (e) {
            throw new Error(e.message || "Something went wrong, couldn't delete the file.");
        }
        return true;
    }
    async deleteFiles(filenames, isTemp) {
        var e_2, _a;
        try {
            for (var filenames_1 = __asyncValues(filenames), filenames_1_1; filenames_1_1 = await filenames_1.next(), !filenames_1_1.done;) {
                const filename = filenames_1_1.value;
                if (filename) {
                    (0, fs_1.unlink)(path_1.default.join(__dirname, `../uploads/${isTemp ? "temp/" : ""}` + filename), (e) => {
                        if (e) {
                            throw new Error(e.message || "Something went wrong, couldn't delete the file.");
                        }
                    });
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (filenames_1_1 && !filenames_1_1.done && (_a = filenames_1.return)) await _a.call(filenames_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => String || Error),
    __param(0, (0, type_graphql_1.Arg)("files", () => [graphql_upload_1.GraphQLUpload])),
    __param(1, (0, type_graphql_1.Arg)("isEdit", () => Boolean)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Boolean]),
    __metadata("design:returntype", Promise)
], UploadResolver.prototype, "uploadFilesToZip", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String || Error),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)("prevname", () => String)),
    __param(2, (0, type_graphql_1.Arg)("isTemp", () => Boolean)),
    __param(3, (0, type_graphql_1.Arg)("files", () => [graphql_upload_1.GraphQLUpload])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Boolean, Array]),
    __metadata("design:returntype", Promise)
], UploadResolver.prototype, "updateZipFile", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("filenames", () => [String])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UploadResolver.prototype, "moveFilesFromTemp", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String || Error),
    __param(0, (0, type_graphql_1.Arg)("file", () => graphql_upload_1.GraphQLUpload)),
    __param(1, (0, type_graphql_1.Arg)("isEdit", { defaultValue: false, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean]),
    __metadata("design:returntype", Promise)
], UploadResolver.prototype, "uploadSingleFile", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => String, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("file", () => graphql_upload_1.GraphQLUpload)),
    __param(1, (0, type_graphql_1.Arg)("prevname", () => String)),
    __param(2, (0, type_graphql_1.Arg)("isEdit", () => Boolean, { defaultValue: false, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Boolean]),
    __metadata("design:returntype", Promise)
], UploadResolver.prototype, "updateImage", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => [String], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("files", () => [graphql_upload_1.GraphQLUpload])),
    __param(1, (0, type_graphql_1.Arg)("isTemp", () => Boolean)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Boolean]),
    __metadata("design:returntype", Promise)
], UploadResolver.prototype, "uploadMultipleFiles", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("filename", () => String)),
    __param(1, (0, type_graphql_1.Arg)("isTemp", () => Boolean)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", Promise)
], UploadResolver.prototype, "deleteFile", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("filenames", () => [String])),
    __param(1, (0, type_graphql_1.Arg)("isTemp", () => Boolean)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Boolean]),
    __metadata("design:returntype", Promise)
], UploadResolver.prototype, "deleteFiles", null);
UploadResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UploadResolver);
exports.UploadResolver = UploadResolver;
//# sourceMappingURL=Upload.js.map