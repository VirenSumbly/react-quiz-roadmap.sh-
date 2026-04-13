import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Start from './pages/Start.jsx'

import Questions from './pages/Questions'
import Result from './pages/Result'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />}></Route>
       
        <Route path='/questions' element={<Questions  />}></Route>
        <Route path='/result' element={<Result />} ></Route>
        
      </Routes>
      
    
    
    </BrowserRouter>

    </>
  )
}

export default App
