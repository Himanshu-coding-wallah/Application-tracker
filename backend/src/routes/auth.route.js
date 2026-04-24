import { Router } from "express";
import * as authController from "../controller/auth.controller.js"

const authRouter = Router()

// POST /api/auth/register
authRouter.post("/register", authController.register)
authRouter.post("/login", authController.login)
authRouter.get("/logout", authController.logout)
authRouter.get("/new-access-token", authController.newAccessToken)
export default authRouter