import { Room } from "../model/room.model.js"

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
    } catch (error) {
        res.status(500).json({ message: "Error in fetchRoomsController", error: error.message })
        console.log("Error in fetchRoomsController", error.message);
    }
}
export const createRoomController = async (req, res) => {
    try {
        const { roomName, description } = req.body
        if (!roomName || !description) {
            return res.json({ message: "Please fill the all fields" })
        }
        const room = await Room.findOne({ roomName })
        if (room) {
            return res.json({ message: "Room already exits. Please enter a different room name" })
        }
        const newRoom = await Room.create({ roomName, description })
        newRoom.participants.push(req.user.id )
        await newRoom.save()
        return res.status(200).json({ message: "Room created ", data: newRoom })
    } catch (error) {
        res.status(500).json({ message: "Error in createRoomController", error: error.message })
        console.log("Error in createRoomController", error.message);
    }
}
export const deleteRoomController = async (req, res) => {
    try {
        const { roomName } = req.body
        const room = await Room.findOne({ roomName })
        if (!room) {
            return res.json({ message: "Room not found" })
        }
        await Room.findByIdAndDelete(room._id)
        res.json({ message: "Room deleted" })
    } catch (error) {
        res.status(500).json({ message: "Error in deleteRoomController", error: error.message })
        console.log("Error in deleteRoomController", error.message);
    }
}
export const joinRoomController = async (req, res) => {
    try {
        const { roomId } = req.params
        const { userId } = req.user.id
        const room = await Room.findOne({ roomId })

        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        console.log(room.participants.toObject());
    // !   if(room.participants.includes(userId)) {
    // !   return res.status(400).json({ message: "User already in the room" });
    // !  }
        if (room.participants.some(p => p.equals(userId))) {
            return res.status(400).json({ message: "User already in room" });
        }
       
        room.participants.push(userId)
        await room.save()
         res.status(200).json({
            message: "Joined room successfully",
            data:room.participants
        });

    } catch (error) {
        res.status(500).json({ message: "Error in joinRoomController", error: error.message })
        console.log("Error in joinRoomController", error.message);
    }
}