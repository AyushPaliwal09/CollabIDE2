import { Room } from "../model/room.model.js"
import mongoose from "mongoose"
import { User } from "../model/user.model.js"
export const getRoomController = async (req, res) => {
    try {
        const { id } = req.params
        const room = await Room.findById(id).populate("participants")
        if (!room) {
            return res.json({ message: "Room not found" })
        }
        res.status(200).json(room)
    } catch (error) {
        res.status(500).json({ message: "Error in getRoomController", error: error.message })
        console.log("Error in getRoomController", error.message);
    }
}
export const fetchRoomsController = async (req, res) => {
    try {
        const {email} = req.body
    } catch (error) {
        res.status(500).json({ message: "Error in fetchRoomsController", error: error.message })
        console.log("Error in fetchRoomsController", error.message);
    }
}
export const createRoomController = async (req, res) => {
    try {
        const { roomName, description } = req.body
        const { userId } = req
        if (!roomName || !description) {
            return res.json({ message: "Please fill the all fields" })
        }
        const room = await Room.findOne({ roomName })
        if (room) {
            return res.json({ message: "Room already exits. Please enter a different room name" })
        }
        const newRoom = await Room.create({ roomName, description })
        const userObjectId = new mongoose.Types.ObjectId(userId);

        newRoom.participants.push(userObjectId)
        await newRoom.save()
        return res.status(200).json({ message: "Room created ", data: newRoom })
    } catch (error) {
        res.status(500).json({ message: "Error in createRoomController", error: error.message })
        console.log("Error in createRoomController", error.message);
    }
}
export const deleteRoomController = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const room = await Room.findOne({ _id:id  });
        if (!room) {
            return res.json({ message: "Room not found" })
        }
        console.log(room.id);
        await Room.findByIdAndDelete({_id:id })
        res.json({ message: "Room deleted"  })
    } catch (error) {
        res.status(500).json({ message: "Error in deleteRoomController", error: error.message })
        console.log("Error in deleteRoomController", error.message);
    }
}

export const joinRoomController = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req;
        console.log(id);
        
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const room = await Room.findOne({ _id:id });

        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }

        const userObjectId = new mongoose.Types.ObjectId(userId);

        const isAlreadyJoined = room.participants.some(p => p && p.equals(userObjectId)
        );

        if (isAlreadyJoined) {
            return res.status(400).json({ message: "User already in room" });
        }
        room.participants.push(userObjectId);
        await room.save();


        return res.status(200).json({
            message: "Joined room successfully",
            participants: room.participants
        });

    } catch (error) {
        console.log("Error in joinRoomController", error.message);
        return res.status(500).json({
            message: "Error in joinRoomController",
            error: error.message
        });
    }
};