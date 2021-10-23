import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

import SideNav from './components/SideNav'

const App = () => {
  return (
    <div className="App flex">
      <SideNav />
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
