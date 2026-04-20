import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    senderName:{
        type:String,
        ref:"User",
        required:true
    },
    roomId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room",
        required:true
    },
    content:{
        type:String,
        required:true
    }

},{timestamps:true})

export const Message = mongoose.model("Message",messageSchema)
