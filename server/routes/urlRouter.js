import express from "express";
import { shortLink, redirectLink } from "../controllers/urlController.js";

const router = express.Router();

router.post("/shorten", shortLink);
router.get("/:code", redirectLink);

export default router;
