import express from "express";
import { register, login, logout, verifyEmail, reset, srmail } from "../controllers/auth.controller.js";


const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.post("/verify", verifyEmail)
router.post("/srmail", srmail)
router.post("/reset", reset)

export default router;
