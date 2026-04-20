import express from "express"
import {
    createRoomController,
    deleteRoomController,
    fetchRoomsController,
    getRoomController,
    joinRoomController,
    roomPageController,
    leaveRoomController,
    rejoinRoomController
} from "../controller/room.controller.js"
import { protect } from "../middleware/middleware.js"

const router = express.Router()

router.get("/get-room/:id",protect, getRoomController)
router.post("/fetch-rooms/:id",protect, fetchRoomsController)
router.post("/create-room",protect, createRoomController)
router.delete("/delete-room/:id",protect, deleteRoomController)
router.post("/join-room/:id",protect, joinRoomController)
router.post("/room-page/:id",protect, roomPageController)
router.post("/leave-room/:id",protect, leaveRoomController)
router.post("/rejoin-room/:id",protect, rejoinRoomController)



export default router