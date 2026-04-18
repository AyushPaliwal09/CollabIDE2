import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        // required:true  
        default:null // because for OAuth users, password will be null
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
          
        ],
    uid:{
        type:String, // for OAuth users, we will store the uid from the provider (Google/Github)
        default:null  // because for normal users, uid will be null
    }
    
})


export const User = mongoose.model("User", userSchema)