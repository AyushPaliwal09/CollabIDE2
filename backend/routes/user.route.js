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
router.post("/signup",signupController)
router.post("/login", loginController)
router.post("/logout", protect,logoutController)
router.post("/delete/:id",protect, deleteController)
router.put("/update-password", protect,changePasswordController)




export default router