import React from 'react'
import {BrowserRouter ,Routes , Route} from  'react-router-dom'
import Home from '../assets/pages/home/Home'
import Masterlogin from '../assets/pages/masterlogin/Masterlogin'
import SignIn from '../assets/pages/signin/SignIn'


export default function Approuter() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/masterlogin' element={<Masterlogin/>} />
        <Route path='/signin' element={<SignIn/>} />
        
    </Routes>
    </BrowserRouter>
  )
}
