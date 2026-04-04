import express from "express"
import {
    changePasswordController,
    deleteController,
    loginController,
    logoutController,
    signupController
} from "../controller/user.controller.js"

const router = express.Router()
router.post("/signup", signupController)
router.post("/login", loginController)
router.post("/logout", logoutController)
router.post("/delete", deleteController)
router.put("/update-password", changePasswordController)




export default router