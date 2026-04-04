import mongoose from "mongoose"

const roomSchema = mongoose.Schema({
    roomName :{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    participants :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
}, {timestamps:true})


export const Room = mongoose.model("Room", roomSchema)