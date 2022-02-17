import express from "express";
import { getNews } from "../controllers/News.js";

const router = express.Router();

// Starting with /Newss
router.get("/", getNews);
router.get("/:coin", getNews);

export default router;
