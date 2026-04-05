import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Auth from './auth/auth.jsx'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
       </div>
    </>
  )
}

export default App
