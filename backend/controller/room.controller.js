import { Room } from "../model/room.model.js"
import { User } from "../model/user.model.js"
import mongoose from "mongoose"
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
        const { userId } = req
        const user = await User.findById(userId).populate("rooms")
        const rooms = user.rooms
        res.status(200).json(rooms)
    } catch (error) {
        res.status(500).json({ message: "Error in fetchRoomsController", error: error.message })
        console.log("Error in fetchRoomsController", error.message);
    }
}
export const createRoomController = async (req, res) => {
    try {
        const { roomName, description } = req.body
        const { userId } = req
        const user = await User.findOne({ _id: userId })
        const admin = userId
        if (!roomName || !description) {
            return res.json({ message: "Please fill the all fields" })
        }
        const room = await Room.findOne({ roomName })
        if (room) {
            return res.json({ message: "Room already exits. Please enter a different room name" })
        }
        const newRoom = await Room.create({ roomName, description, admin })
        const roomObjectId = new mongoose.Types.ObjectId(newRoom._id);

        const isAlreadyRoom = user.rooms.some(p => p && p.equals(roomObjectId)
        );

        if (isAlreadyRoom) {
            return res.status(400).json({ message: "room already there" });
        }
        user.rooms.push(roomObjectId)
        newRoom.activeUser.push(admin);
        await user.save()
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
        const { userId } = req
        const user = await User.findById({userId})
        console.log(user);
        
        const room = await Room.findOne({ _id: id });
        if (!room) {
            return res.json({ message: "Room not found" })
        }
        const admin = room.admin
        if (userId == admin) {
            await Room.findByIdAndDelete({ _id: id })
            if (user.rooms.includes(_id)) {
                user.rooms = user.rooms.filter((p) => p && p.toString() !== _id)
            }
            return res.json({ message: "Room deleted" })
        }

        res.json({ message: "You are not admin" })
    } catch (error) {
        res.status(500).json({ message: "Error in deleteRoomController", error: error.message })
        console.log("Error in deleteRoomController", error.message);
    }
}
export const joinRoomController = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req;
        const user = await User.findOne({ _id: userId })
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const room = await Room.findOne({ _id: id });
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }

        const userObjectId = new mongoose.Types.ObjectId(userId);

        const isAlreadyJoined = room.participants.some(p => p && p.equals(userObjectId)
        );

        if (isAlreadyJoined) {
            return res.status(400).json({ message: "User already in room" });
        }
        const roomObjectId = new mongoose.Types.ObjectId(id);

        const isAlreadyRoom = user.rooms.some(p => p && p.equals(roomObjectId)
        );

        if (isAlreadyRoom) {
            return res.status(400).json({ message: "room already there" });
        }
        user.rooms.push(roomObjectId)
        await user.save()
        room.participants.push(userObjectId);
        room.activeUser.push(userObjectId);
        await room.save();
        return res.status(200).json({
            message: "Joined room successfully",
            participants: room.participants,
            room
        });

    } catch (error) {
        console.log("Error in joinRoomController", error.message);
        return res.status(500).json({
            message: "Error in joinRoomController",
            error: error.message
        });
    }
};

export const roomPageController = async (req, res) => {
    try {
        const { id } = req.params
        const room = await Room.findById({ _id: id })
        if (!room) {
            return res.status(404).json({ messaeg: "Room not found." })
        }
        res.status(200).json(room)
    } catch (error) {
        console.log("Error in roomPageController", error.message);
        return res.status(500).json({
            message: "Error in roomPageController",
            error: error.message
        });
    }
}

export const leaveRoomController = async (req, res) => {
    try {
        const { id } = req.params
        const { userId } = req;
        const room = await Room.findById({ _id: id });
        console.log("Leaving room with id:", id, "for user:", userId);
        if (!room) {
            return res.status(404).json({ message: "Room not found" })
        }
        if (room.activeUser.includes(userId)) {
            room.activeUser = room.activeUser.filter((p) => p && p.toString() !== userId)
        }
        console.log("Updated active users after leaving:", room.activeUser);
        res.status(200).json({ message: "Left room successfully", room })
        await room.save();
    } catch (error) {
        console.log("Error in leaveRoomController", error.message);
        return res.status(500).json({
            message: "Error in leaveRoomController",
            error: error.message
        });
    }
}

export const rejoinRoomController = async (req, res) => {
    try {
        const { id } = req.params
        const { userId } = req;
        console.log("Rejoining room with id:", id, "for user:", userId);
        const room = await Room.findById({ _id: id })
        if (!room) {
            return res.status(404).json({ message: "Room not found" })
            console.log("Room not found with id:", id);
        }
        if (room.activeUser.includes(userId)) {
            return res.status(400).json({ message: "User already in room" })
            console.log("User already active in room with id:", id);
        }
        console.log("Current active users before rejoining:", room.activeUser);
        room.activeUser.push(userId);
        await room.save();
        res.status(200).json({ message: "Rejoined room successfully", room })
    } catch (error) {
        console.log("Error in rejoinRoomController", error.message);
        return res.status(500).json({ message: "Error in rejoinRoomController", error: error.message });
    }
}

export const updateRoomCodeController = async (req, res) => {
    try {
        const { id } = req.params;
        const { code } = req.body;
        console.log(code);
        const room = await Room.findByIdAndUpdate(id, { code }, { new: true });
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        res.status(200).json({ message: "Room code saved", room });
    } catch (error) {
        console.log("Error in updateRoomCodeController", error.message);
        return res.status(500).json({ message: "Error in updateRoomCodeController", error: error.message });
    }
}