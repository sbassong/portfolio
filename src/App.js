import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

import NavBar from './components/NavBar'
// import NavBar from './components/SideBar'


const App = () => {
  return (
    <div className="App ">
      <NavBar />
      <main >
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App;
