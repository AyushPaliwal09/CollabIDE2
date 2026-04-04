import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB.js"
import userRouter from "./routes/user.route.js"
import roomRouter from "./routes/room.route.js"


dotenv.config()
connectDB()
const app = express()

const PORT = process.env.PORT
app.use(express.json())
app.use("/auth",userRouter)
app.use("/room",roomRouter)

app.listen(PORT, ()=>console.log(`Server is running on PORT:${PORT}`))









