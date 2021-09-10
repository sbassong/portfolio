import { Switch, Route } from 'react-router-dom':
import './styles/App.css';

import Introduction from './pages/Introduction'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'

import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' components={Introduction} />
        <Route exact path='/projects' components={Projects} />
        <Route exact path='/about' components={About} />
        <Route exact path='/contact' components={Contact} />
        <Route path='/projects/:projectName' components={ProjectPage} />
      </Switch>
    </div>
  );
}

export default App;
