import { Router } from "express";
import { existsSync } from "fs";
import path from "path";

const router = Router();

router.get("/:file", (req, res) => {
  const isExist = existsSync(
    path.join(__dirname, "../uploads", req.params.file)
  );
  if (!isExist) {
    res.status(404).json({
      success: 0,
      message: "Couldn't find the file you're looking for to download.",
    });
    return;
  }
  res.download(path.join(__dirname, "../uploads/", req.params.file));
});

export default router;
