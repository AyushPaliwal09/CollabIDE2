import { User } from "../model/user.model.js"
import bcrypt from "bcrypt"
export const signupController = async (req,res)=>{
    try {
        const {username, email, password} = req.body
        if(!username || !password ||! email){
            return res.json({message:"All fields are required"})
        }
        const user = await User.findOne({email})
        if(user){
            return res.json({message:"User already exists"})
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await User.create({
            username,
            password:hashedPassword,
            email
        })
        return res.json({message:"user created successfully", data:newUser})
    } catch (error) {
        res.status(500).json({message:"Error in signupController",error: error.message})
        console.log("Error in signupController", error.message);
        
    }
}
export const loginController = async (req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message:"Error in loginController",error: error.message})
        console.log("Error in loginController", error.message);
        
    }
}
export const logoutController = async (req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message:"Error in logoutController",error: error.message})
        console.log("Error in logoutController", error.message);
        
    }
}
export const deleteController = async (req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({message:"Error in deleteController",error: error.message})
        console.log("Error in deleteController", error.message);
        
    }
}
