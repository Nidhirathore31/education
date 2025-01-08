import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import {Route, BrowserRouter as  Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
