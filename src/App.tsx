import './App.css'
import NavigationBar from './pages/NavigationBar'
import Intro from './pages/Intro'
import About from './pages/About'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <NavigationBar />
      <Intro />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  )
}

export default App
