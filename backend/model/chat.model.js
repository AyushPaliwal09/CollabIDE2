import mongoose  from "mongoose";

const chatSchema = mongoose.Schema({
    roomId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room"
    },
    message:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",
            required:true
        }
    ]
},{timestamps:true})

export const Chat = mongoose.model("Chat",chatSchema)