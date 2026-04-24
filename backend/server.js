import express from "express"
import dotenv from "dotenv"
import http from "http"
import { Server } from "socket.io"
import cors from "cors"
import { connectDB } from "./db/connectDB.js"
import userRouter from "./routes/user.route.js"
import roomRouter from "./routes/room.route.js"
import cookieParser from "cookie-parser"


dotenv.config()
connectDB()
const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT

const io = new Server(server, {
  cors: {
    origin: "*",
    // methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }
})

io.on("connection", (socket) => {
  console.log("User connected : ", socket.id);

  //JOIN ROOM
  socket.on("join-room", (roomId) => {
    socket.join(roomId)
    console.log(`User ${socket.id} joined room ${roomId}`);

  })


  // leave room
  socket.on("leave-room", ({ roomId, userId }) => {

    socket.leave(roomId);

    console.log(`${userId} left ${roomId}`);

    io.to(roomId).emit("user-left", userId);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
  });
})


app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use("/api/auth", userRouter)
app.use("/room", roomRouter)
app.get("/",(req,res)=> res.send("Hello there"))


server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})







