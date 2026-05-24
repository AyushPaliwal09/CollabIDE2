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
const rooms = {}

io.on("connection", (socket) => {
  console.log("User connected : ", socket.id);

  //JOIN ROOM
  // socket.on("join-room", (roomId) => {
  //   socket.join(roomId)
  //   console.log(`User ${socket.id} joined room ${roomId}`);

  // })
   
  socket.on("join-room", ({ roomId, user }) => {
    if (!roomId || !user) return;

    socket.join(roomId);
    socket.roomId = roomId;
    console.log(`${user.username} joined room ${roomId} with socket id ${socket.id}`);

    if (!rooms[roomId]) rooms[roomId] = { users: [], code: "", language: "javascript" }; 

    rooms[roomId].users = rooms[roomId].users.filter(u => u.socket !== socket.id);  

    // add this socket

    // if(!rooms[roomId].users.some(u => u.id === user.id)) {
    //   rooms[roomId].users.push({ socket: socket.id, id: user.id, username: user.username }); 
    // }
    rooms[roomId].users.push({
      socket: socket.id,
      id: user._id,
      name: user.username || user.name || "Unknown"
    });

    // send full user list to everyone in room
    io.to(roomId).emit("online-users", rooms[roomId].users);
    console.log("online users in room", roomId, rooms[roomId].users);

    // send current code and language to newly joined socket only
    socket.emit("update-code", rooms[roomId].code);
    socket.emit("language-changed", rooms[roomId].language);
    socket.emit("editor-updated", rooms[roomId].editor || null); 
  });
socket.on("chat-message", ({ roomId, message, user }) => {
  // console.log("Received chat message:", { roomId, message, user });
    if (!roomId || !message || !user) return;
    socket.broadcast.to(roomId).emit("chat-message", { message, user });
    // console.log(message, user);
    // console.log("Sending message to room", roomId);
  });
  // code change from a client -> save to room and broadcast to other sockets
  socket.on("code-change", ({ roomId, code }) => {
    if (!roomId) return;
    // console.log("Received code change for room", roomId);
    if (!rooms[roomId]) rooms[roomId] = { users: [], code: "", language: "javascript", editor: null };
    rooms[roomId].code = code;
    // console.log("code", code);
    socket.to(roomId).emit("update-code", code);
  });

  // leave room
  socket.on("leave-room", ({ roomId, userId }) => {

    socket.leave(roomId);

    console.log(`${userId} left ${roomId}`);

    io.to(roomId).emit("user-left", userId);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected:", socket.id);
      // find the room and user that left
    for (const roomId in rooms) {
      const userIndex = rooms[roomId].users.findIndex(u => u.socket === socket.id); // find the user that left
      if (userIndex !== -1) {
        const user = rooms[roomId].users[userIndex]; // get the user that left
        rooms[roomId].users.splice(userIndex, 1); // remove the user from the room
        io.to(roomId).emit("user-left", user.id); // notify others in the room
      }
    }
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







