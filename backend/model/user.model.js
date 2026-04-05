import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    rooms:
        [
           {
             type:mongoose.Schema.Types.ObjectId,
             ref:"Room"
           }
          
        ]
    
})


export const User = mongoose.model("User", userSchema)