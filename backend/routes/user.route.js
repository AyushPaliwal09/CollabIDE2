import express from "express"
import {
    changePasswordController,
    deleteController,
    getUserController,
    loginController,
    logoutController,
    signupController
} from "../controller/user.controller.js"
import { protect } from "../middleware/middleware.js"

const router = express.Router()
router.get("/get-user/:id",protect, getUserController)
router.post("/signup", signupController)
router.post("/login", loginController)
router.post("/logout", logoutController)
router.post("/delete/:id", deleteController)
router.put("/update-password", changePasswordController)




export default router