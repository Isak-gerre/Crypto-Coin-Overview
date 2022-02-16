import express from "express";
import { getUser, createUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// Starting with /users
router.get("/", getUser);
router.get("/:id", getUser);
router.get("/:name", getUser);

router.post("/", createUser);

router.patch("/", updateUser);

export default router;
