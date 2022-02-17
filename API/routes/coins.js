import express from "express";
import { getCoin } from "../controllers/Coins.js";


const router = express.Router();

// Starting with /Coins
router.get("/", getCoin);
router.get("/:id", getCoin);
router.get("/:name", getCoin);

export default router;
