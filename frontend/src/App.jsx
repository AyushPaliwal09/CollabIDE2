import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Auth from './auth/auth.jsx'
import {Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import Dashboard from './pages/Dashboard.jsx'
import JoinRoomModal from './components/JoinRoomModal.jsx'
import RoomPage from './pages/RoomPage.jsx'




function App() {

  return (
    <>
     <AuthProvider>
       <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/room/join-room/:id" element={<JoinRoomModal />} />
          <Route path="/room/roompage" element={<RoomPage />} />
        </Routes>
       </div>
     </AuthProvider>
    </>
  )
}

export default App
