import { useState } from 'react'
import { BrowserRouter,Route, Routes } from'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Features from './Pages/Features';
import Team from './Pages/Team';
import LoginSignUp from './Pages/LoginSignUp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   <BrowserRouter>

      <Navbar/> 
      <Routes>
      <Route path='/' element={<Features/>}> </Route>
      <Route path='/team' element={<Team/>}> </Route>
      <Route path='/login' element={<LoginSignUp/>}> </Route>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
