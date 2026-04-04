import jwt from "jsonwebtoken"

export const generateToken =  (user)=>{
    const token = jwt.sign({id:user._id, email:user.email}, process.env.SECRET_KEY,
        {expiresIn:"1d"}
    )
    return token
}