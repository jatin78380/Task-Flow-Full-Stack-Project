import { useState } from 'react'
import { BrowserRouter,Route, Routes } from'react-router-dom';
import './index.css'

import Features from './Pages/Features';
import Team from './Pages/Team';  
import Register from './Pages/Register';
import CreatingTask from './Pages/CreatingTask';
import Home from './Components/Navbar/Home'
import Login from './Pages/Login';
import CheckDemo from './Pages/CheckDemo';

function App() {

  return (
    <>

   <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/features' element={<Features/>}> </Route>
      <Route path='/team' element={<Team/>}> </Route>
      <Route path='/login' element={<Login/>}> </Route>

      <Route path='/register' element={<Register/>}> </Route>

      <Route path='/demo' element={<CheckDemo/>}></Route>
      <Route path='/create' element={<CreatingTask/>}></Route>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
