import { useState } from "react"
import Email from '../assets/icon-email.png'
import GitHub from '../assets/icon-github.png'
import LinkedIn from '../assets/icon-linkedin.png'

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed flex justify-between items-center px-6 sm:px-8 py-4 text-white relative">
      {/* Logo/Handle */}
      <a href="/" className="hover:text-blue-400 transition font-semibold">
        @arossaadhikary
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <a href="#about"><li className="transition-all duration-200 hover:font-bold">About</li></a>
        <a href="#projects"><li className="transition-all duration-200 hover:font-bold">Projects</li></a>
        <a href="#experiences"><li className="transition-all duration-200 hover:font-bold">Experiences</li></a>
        <a href="#connect"><li className="transition-all duration-200 hover:font-bold">Connect</li></a>
      </ul>

      {/* Social Icons (desktop only) */}
      <div className="hidden md:flex space-x-6">
        <a href="https://www.linkedin.com/in/arossaadhikary/" target="_blank">
          <img src={LinkedIn} alt="LinkedIn" className="h-6 w-6 hover:opacity-70 transition"/>
        </a>
        <a href="https://github.com/arossaadhikary" target="_blank">
          <img src={GitHub} alt="GitHub" className="h-6 w-6 hover:opacity-70 transition"/>
        </a>
        <a href="mailto:arossa.adhikaryc@gmail.com">
          <img src={Email} alt="Email" className="h-6 w-6 hover:opacity-70 transition"/>
        </a>
      </div>

      {/* Hamburger / X button (mobile only) */}
      <button 
        className="md:hidden focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <span className="text-3xl">&times;</span>
        ) : (
          <span className="text-3xl">&#9776;</span>
        )}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col items-center justify-center space-y-8 text-2xl z-40">
          <a href="#about" onClick={() => setMenuOpen(false)} className="transition-all duration-200 hover:font-bold">About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="transition-all duration-200 hover:font-bold">Projects</a>
          <a href="#experiences" onClick={() => setMenuOpen(false)} className="transition-all duration-200 hover:font-bold">Experiences</a>
          <a href="#connect" onClick={() => setMenuOpen(false)} className="transition-all duration-200 hover:font-bold">Connect</a>
          <div className="flex space-x-6 pt-6">
            <a href="https://www.linkedin.com/in/arossaadhikary/" target="_blank">
              <img src={LinkedIn} alt="LinkedIn" className="h-8 w-8 hover:opacity-70 transition"/>
            </a>
            <a href="https://github.com/arossaadhikary" target="_blank">
              <img src={GitHub} alt="GitHub" className="h-8 w-8 hover:opacity-70 transition"/>
            </a>
            <a href="mailto:arossa.adhikaryc@gmail.com">
              <img src={Email} alt="Email" className="h-8 w-8 hover:opacity-70 transition"/>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavigationBar
