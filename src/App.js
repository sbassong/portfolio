import { useState, useEffect } from 'react'

import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Introduction from './pages/Introduction'

import SideNav from './components/SideNav'
import TopNav from './components/TopNav'

const App = () => {
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  //detects the width and height of window on resize event
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])

  return (
    <div className="App flex bg-crystal-bg bg-no-repeat bg-cover bg-center bg-opacity-70">
      {windowDimension.winWidth >= 768 && <SideNav windowDimension={windowDimension}/>}
      
      {
        windowDimension.winWidth < 768 
        ?
        <main className='w-full'>
        <TopNav />
        <Introduction />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
        :
      <main className='w-full' >
        <Introduction />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>}
    </div>
  )
}

export default App;
