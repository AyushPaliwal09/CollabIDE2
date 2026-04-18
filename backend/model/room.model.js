import mongoose, { mongo } from "mongoose"

const roomSchema = mongoose.Schema({
    roomName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    activeUser:[],
    interviewBtn: {
        type: Boolean,
        default: false
    }
    
}, { timestamps: true })


export const Room = mongoose.model("Room", roomSchema)