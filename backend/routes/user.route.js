import express from "express"
import {
    changePasswordController,
    deleteController,
    getUserController,
    loginController,
    logoutController,
    signupController,
    firebaseAuthController
} from "../controller/user.controller.js"
import { protect } from "../middleware/middleware.js"

const router = express.Router()
router.get("/get-user",protect, getUserController)
router.post("/signup",signupController)
router.post("/login", loginController)
router.post("/logout", protect,logoutController)
router.post("/delete/:id",protect, deleteController)
router.put("/update-password", protect,changePasswordController)
router.post("/firebase-auth", firebaseAuthController)


export default router