"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
router.get("/:file", (req, res) => {
    const isExist = (0, fs_1.existsSync)(path_1.default.join(__dirname, "../uploads", req.params.file));
    if (!isExist) {
        res.status(404).json({
            success: 0,
            message: "Couldn't find the file you're looking for to download.",
        });
        return;
    }
    res.download(path_1.default.join(__dirname, "../uploads/", req.params.file));
});
exports.default = router;
//# sourceMappingURL=download.js.map