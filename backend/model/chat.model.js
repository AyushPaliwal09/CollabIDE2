import mongoose  from "mongoose";

const chatSchema = mongoose.Schema({
    senderName:{
        type:String,
        ref:"User",
        required:true
    },
    roomId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room"
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Chat = mongoose.model("Chat",chatSchema)