import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
