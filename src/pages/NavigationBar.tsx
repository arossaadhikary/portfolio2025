import Email from '../assets/icon-email.png'
import GitHub from '../assets/icon-github.png'
import LinkedIn from '../assets/icon-linkedin.png'

const NavigationBar = () => {
    return (
        <nav className = "flex justify-between items-center px-8 py-4 text-white">
            {/* @arossaadhikary*/}
            <a href="/" className = "hover:text-blue-400 transition">@arossaadhikary</a>

            {/* Center Links */}
            <ul className="flex space-x-8 text-xl">
                <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#experiences"><li>Experiences</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-6">
                <a href="https://www.linkedin.com/in/arossaadhikary/" target="_blank"><img src={LinkedIn} alt="LinkedIn" className="h-6 w-6 hover:opacity-70 transition"/></a>
                <a href="https://github.com/arossaadhikary" target="_blank"><img src={GitHub} alt="GitHub" className="h-6 w-6 hover:opacity-70 transition"/></a>
                <a href="mailto:arossa.adhikaryc@gmail.com"><img src={Email} alt="Email" className="h-6 w-6 hover:opacity-70 transition"/></a>
            </div>
        </nav>
    )
}

export default NavigationBar

{/*
px-8 = horizontal padding
py-4 = vertical padding
space-x-8 = horizontal spacing between items
*/}