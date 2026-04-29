import { Router } from "express";
import * as authController from "../controller/auth.controller.js"

const authRouter = Router()

// post /api/auth/register
authRouter.post("/register", authController.register)

//get /api/auth/get-me
authRouter.get("/get-me", authController.getMe)

//get /api/auth/refresh-token
authRouter.get("/refresh-token", authController.refreshToken)

//get /api/auth/logout
authRouter.get("/logout", authController.logout)

//get /api/auth/login
authRouter.post("/login", authController.login)

//get /api/auth/logout-all
authRouter.get("/logout-all", authController.logoutAll)

export default authRouter