import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./db/connectDB.js"
import userRouter from "./routes/user.route.js"
import roomRouter from "./routes/room.route.js"
import cookieParser from "cookie-parser"


dotenv.config()
connectDB()
const app = express()

const PORT = process.env.PORT
app.use(cors({
   origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(express.json())

app.use(cookieParser())
app.use("/api/auth",userRouter)
app.use("/room",roomRouter)

app.listen(PORT, ()=>console.log(`Server is running on PORT:${PORT}`))









