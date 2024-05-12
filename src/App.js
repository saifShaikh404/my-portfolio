import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Links from './components/Links'
import About from './components/About'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <Links />
    </div>
  )
}

export default App
