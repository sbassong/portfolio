import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Introduction from './pages/Introduction'

import SideNav from './components/SideNav'

const App = () => {
  return (
    <div className="App flex">
      <SideNav />
      <main >
        <Introduction />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App;
