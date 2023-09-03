// route setup for user authentication (signup and login)

import express from "express";
import { signup, login, verifyToken } from "../controllers/authControl.js";

const router = express.Router();

// directing routes to {signup, login, token verification} of authControl.js

router.post("/signup", signup);
router.post("/login", login);
router.get("/verifyToken", verifyToken);

export default router;