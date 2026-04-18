import { User } from "../model/user.model.js"
import bcrypt from "bcrypt"
import { generateToken } from "../utiles/generateToken.js"
export const signupController = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !password || !email) {
            return res.json({ message: "All fields are required" })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.json({ message: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            username,
            password: hashedPassword,
            email
        })
        const token = await generateToken(newUser, res)
        return res.json({
            message: "user created successfully", user: {
                id: newUser._id,
                username: newUser.username,
                password: newUser.password,
                email: newUser.email
            }, token: token
        })
    } catch (error) {
        res.status(500).json({ message: "Error in signupController", error: error.message })
        console.log("Error in signupController", error.message);
    }

}
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(500).json({ message: "User doesn't exist" })
        }
        const matchPassword = await bcrypt.compare(password, user.password)
        const token = await generateToken(user, res)

        if (matchPassword && user) {
            return res.status(200).json({
                message: "Login succesfully", user: {
                    id: user._id,
                    username: user.username,
                    password: user.password,
                    email: user.email
                }, token: token
            })
        }

    } catch (error) {
        res.status(500).json({ message: "Error in loginController", error: error.message })
        console.log("Error in loginController", error.message);

    }
}
export const getUserController = async (req, res) => {
    try {
        const userId = req.params.id || req.userId; // Get user ID from params or from middleware
        const user = await User.findOne({ _id: userId })
        if (!user) {
            return res.json({ message: "User not found" })
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: "Error in getUserController", error: error.message })
        console.log("Error in getUserController", error.message)
    }
}
export const logoutController = async (req, res) => {
    try {
        res.cookie("token","", {
            httpOnly: true,
            expires: new Date(0)
        })
        return res.json({ message: "Logout successfully" })
    } catch (error) {
        res.status(500).json({ message: "Error in logoutController", error: error.message })
        console.log("Error in logoutController", error.message);

    }
}
export const deleteController = async (req, res) => {
    try {
       const userId = req.params.id
        const user = await User.findOne({ _id: userId })
        if (!user) {
            return res.json({ message: "User not found" })
        }
        await User.findByIdAndDelete({_id:userId})
        res.json({message:"user deleted successfully"})
    } catch (error) {
        res.status(500).json({ message: "Error in deleteController", error: error.message })
        console.log("Error in deleteController", error.message);

    }
}
export const changePasswordController = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body
        if (!currentPassword || !newPassword) {
            return res.json({ message: "Passwords are required" })
        }
        const user = await User.findById(req.user.Id).select("password")
        if (!user) {
            return res.json({ message: "no user found" })
        }
        const isMatch = await bcrypt.compare(currentPassword, user.password)
        if (!isMatch) {
            return res.json({
                message: "Current password is incorrect"
            });
        }
        user.password = await bcrypt.hash(newPassword, 10)
        await user.save()
    } catch (error) {
        res.status(500).json({ message: "Error in changePasswordController", error: error.message })
        console.log("Error in changePasswordController", error.message);
    }
}

export const firebaseAuthController = async (req, res) => {
    try {
        const {username, email, uid } = req.body
        let user = await User.findOne({ email })
        if (!user) {
            user = await User.create({
                username,
                email,
                uid
            });
        }
        const token = await generateToken(user, res)
        return res.status(200).json({
            message: "Login successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                uid: user.uid
            },
            token: token
        });
    } catch (error) {
        res.status(500).json({ message: "Error in firebaseAuthController", error: error.message })
        console.log("Error in firebaseAuthController", error.message);
    }
}

// export const loginByGithubController = async (req, res) => {
//     try {
//         const { username, email, uid } = req.body
//         let user = await User.findOne({ email })
//         if (!user) {
//             user = await User.create({
//                 username,
//                 email,
//                 uid
//             });
//         }
//         const token = await generateToken(user, res)
//         return res.status(200).json({
//             message: "Login successfully",
//             user: {
//                 id: user._id,
//                 username: user.username,
//                 email: user.email,
//                 uid: user.uid
//             },
//             token: token
//         });
//     } catch (error) {
//         res.status(500).json({ message: "Error in loginByGithubController", error: error.message })
//         console.log("Error in loginByGithubController", error.message);
//     }
// }
