import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/AboutMe/About'
import Skills from './components/skills/Skills'
import ContactMe from './components/Contact/ContactMe'
import Footer from './components/Footer/Footer'
import Proyects from './components/Proyects/Proyects'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <About />
        <Skills />
        <Proyects />
        <ContactMe />
      </div>
      <Footer />
    </>
  )
}

export default App