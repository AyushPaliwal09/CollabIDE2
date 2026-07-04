# 🚀 CollabIDE

<p align="center">
  <img src=".github/assets/images/banner.png" alt="CollabIDE Banner" width="100%">
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![NodeJS](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Real--Time-black?style=for-the-badge&logo=socket.io)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-FFCA28?style=for-the-badge&logo=firebase)
![JWT](https://img.shields.io/badge/JWT-Secure_Auth-black?style=for-the-badge&logo=jsonwebtokens)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</p>

<p align="center">
A modern real-time collaborative coding platform where developers can create coding rooms, collaborate simultaneously, chat with teammates, and build together from anywhere.
</p>

---

# ✨ Features

### 👥 Authentication

- Secure JWT Authentication
- Cookie-based sessions
- Firebase Authentication
- Protected Routes
- User Registration & Login

---

### 💻 Collaborative Coding

- Real-time collaborative editor
- Instant code synchronization
- Multiple participants in one room
- Create or Join coding rooms
- Shared editing experience
- Auto updates using Socket.IO

---

### 💬 Live Chat

- Built-in room chat
- Instant messaging
- Team communication while coding

---

### 🌐 Real-time Communication

- Socket.IO powered
- Live room updates
- Connected users
- Fast synchronization

---

### 🎨 Modern UI

- Responsive Design
- Clean Interface
- Fast Navigation
- Optimized User Experience

---

### 🔒 Security

- JWT Authentication
- Password Hashing (bcrypt)
- Protected Backend Routes
- Cookie Authentication
- Input Validation

---

# 🏗️ Tech Stack

## Frontend

- React
- Vite
- React Router
- Axios
- Monaco Editor
- Firebase
- Socket.IO Client
- Tailwind CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT
- Cookie Parser
- bcrypt
- CORS

---

# 📂 Project Structure

```
CollabIDE
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   ├── auth
│   │   ├── services
│   │   ├── socket
│   │   └── firebase
│
├── backend
│   ├── controller
│   ├── routes
│   ├── model
│   ├── middleware
│   ├── db
│   └── utiles
│
└── README.md
```

---

# ⚡ How It Works

1. User signs in securely.
2. Create a new coding room.
3. Share the Room ID.
4. Other developers join.
5. Everyone edits the same code simultaneously.
6. Code changes are instantly synchronized.
7. Team members communicate through live chat.

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/ayushpaliwal09/CollabIDE2.git
```

```
cd CollabIDE
```

---

## Backend

```
cd backend
npm install
```

Start backend

```
npm start
```

---

## Frontend

```
cd frontend
npm install
npm run dev
```

---

# 🔄 Real-Time Architecture

```
             Socket.IO

 User A  ─────────────┐

                      │

                      ▼

             Express Server

                      ▲

                      │

 User B ──────────────┘

        │

        ▼

    MongoDB
```

Whenever one user edits code, Socket.IO broadcasts the update to every participant in the room, ensuring everyone stays synchronized in real time.

---

# 📦 Main Technologies

| Technology | Purpose |
|------------|----------|
| React | Frontend |
| Express | Backend |
| MongoDB | Database |
| Socket.IO | Real-time Collaboration |
| Firebase | Authentication |
| JWT | Authorization |
| Axios | API Requests |
| Monaco Editor | Code Editor |
| Tailwind CSS | Styling |

---

# 🚀 Future Improvements

- Voice Chat
- Video Calling
- Collaborative Whiteboard
- AI Code Suggestions
- Code Execution
- File Explorer
- Multiple Files
- Themes
- Code Formatting
- Live Cursor Tracking
- Docker Deployment
- Invite Links
- Admin Controls
- Version History

---

# 💡 Why CollabIDE?

Traditional IDE collaboration often requires multiple tools for communication and teamwork. CollabIDE combines authentication, collaborative editing, and live communication into a single platform, allowing developers to work together efficiently from anywhere.

---

# 📈 Highlights

- Real-time Collaboration
- Multi-user Coding Rooms
- Secure Authentication
- Live Chat
- Responsive Design
- Modular Architecture
- Scalable Backend
- Clean Codebase

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```
git checkout -b feature-name
```

3. Commit your changes

```
git commit -m "Add feature"
```

4. Push

```
git push origin feature-name
```

5. Open a Pull Request

---

# 🛠️ Built With

- React
- Vite
- Express
- MongoDB
- Socket.IO
- Firebase
- JWT
- Tailwind CSS

---

# 👨‍💻 Author

**Ayush Paliwal**
**Monika Khade**

GitHub

https://github.com/ayushpaliwal09

LinkedIn

https://www.linkedin.com/in/monika-khade/

www.linkedin.com/in/ayush--paliwal


---

# ⭐ Support

If you found this project useful,

⭐ Star this repository.

It motivates future development and helps others discover the project.

---

# 📜 License

This project is licensed under the MIT License.

---

<p align="center">

Made with ❤️ using React, Node.js, MongoDB & Socket.IO

</p>
