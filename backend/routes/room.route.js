import express from "express"
import {
    createRoomController,
    deleteRoomController,
    fetchRoomsController,
    getRoomController,
    joinRoomController
} from "../controller/room.controller.js"
import { protect } from "../middleware/middleware.js"

const router = express.Router()

router.get("/get-room/:id", getRoomController)
router.post("/fetch-rooms", fetchRoomsController)
router.post("/create-room", createRoomController)
router.delete("/delete-room/:id", deleteRoomController)
router.post("/join-room/:id",protect, joinRoomController)


export default router