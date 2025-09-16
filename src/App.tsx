import './App.css'
import NavigationBar from './components/NavigationBar'
import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Experiences from './components/Experiences'

function App() {
  return (
    <div>
      <NavigationBar />
      <Intro />
      <About />
      <Projects />
      <Experiences />
    </div>
  )
}

export default App
