import './App.css'
import NavigationBar from './pages/NavigationBar'
import Intro from './pages/Intro'
import About from './pages/About'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {
  return (
    <div>
      <NavigationBar />
      <Intro />
      <About />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
