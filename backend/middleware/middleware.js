// import jwt from "jsonwebtoken"

// export const protect = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization
//         if (!token) {
//             return res.status(401).json({ message: "No token" });
//         }
//         const decoded = await jwt(token, process.env.SECRET_KEY)
//         req.user = decoded
//         next()
//     } catch (error) {
//         console.log("Invalid token");
//         return res.status(401).json({ message: "Invalid token" });


//     }
// }

import jwt from 'jsonwebtoken';
import { User } from '../model/user.model.js';

export const protect = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const token = authHeader.split(' ')[1];
    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decoded.userId).select('-password')
        if (!user) {
            return res.status(401).json({ success: false, message: "User Not Found" });
        }
        req.user = user; // Attach user to request object
        // req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error("Error in auth middleware:", error);
        res.status(401).json({ success: false, message: "Invalid token or expired" });
    }
}