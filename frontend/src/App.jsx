import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Auth from './auth/auth.jsx'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import JoinRoomModal from './components/JoinRoomModal.jsx'
import RoomPage from './pages/RoomPage.jsx'

import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {

  return (
    <>
     <AuthProvider>
       <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>
          } />
          <Route path="/room/join-room/:id" element={<ProtectedRoute><JoinRoomModal /></ProtectedRoute>} />
          <Route path="/room/roompage/:id" element={<ProtectedRoute><RoomPage /></ProtectedRoute>} />
        </Routes>
       </div>
     </AuthProvider>

    </>
  )
}

export default App
