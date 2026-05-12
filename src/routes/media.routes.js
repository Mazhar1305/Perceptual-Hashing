
import express from "express";
import { uploadMedia } from "../controllers/media.controller.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post("/upload", upload.single("media"), uploadMedia);

export default router;