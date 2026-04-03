import { User } from "../model/user.model.js"
import bcrypt from "bcrypt"
import { generateToken } from "../utiles/generateToken.js"
export const signupController = async (req,res)=>{
    try {
        const {username, email, password} = req.body
        if(!username || !password ||!email){
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
        const token = await generateToken(user)
        return res.json({message:"user created successfully", data:newUser, token:token})
    } catch (error) {
        res.status(500).json({message:"Error in signupController",error: error.message})
        console.log("Error in signupController", error.message);
    }

}
export const loginController = async (req,res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
             return res.json({message:"User doesn't exist"})
        }
        const matchPassword = await bcrypt.compare(password,user.password)
        const token = await generateToken(user)

        if(matchPassword && user){
            return res.json({message:"Login succesfully", data:user, token:token})
        }

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
