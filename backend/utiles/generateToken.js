import jwt from "jsonwebtoken"

export const generateToken =  (user,res)=>{
    const token = jwt.sign({id:user._id, email:user.email}, process.env.SECRET_KEY,
        {expiresIn:"1d"}
    )
    res.cookie("token" , token,{
        httpOnly:true,
        secure:false,
        maxAge:24 * 60 * 60 * 1000,
        path:"/"
    })
    return token
}