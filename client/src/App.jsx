import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { About, Dashboard, Home, Projects, SignIn, SignUp } from './pages';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App