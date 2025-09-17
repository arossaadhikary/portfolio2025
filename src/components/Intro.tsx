import Headshot from '../assets/headshot.png'
import Resume from '../../public/ArossaAdhikaryResume.pdf'

const Intro = () => {
    return (
        <section id="intro" className="text-white">
            <div className="mx-auto max-w-6xl px-6 py-16">
                {/* Grid wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                    
                    {/* Text */}
                    <div className="order-2 md:order-1 text-left">
                        <h1 className="text-4xl md:text-5xl font-extrabold">
                            Hello - I'm Arossa 👋
                        </h1>
                        <h2 className="mt-2 text-xl text-slate-300">
                            Welcome to my developer journey.
                        </h2>
                        <p className="mt-4 text-slate-300">
                            I'm a passionate developer from Tampa, FL. I enjoy creating web/IOS applications & expanding into the cybersecurity sphere. I have experience with Python, Javascript, & C++.
                        </p>
                        <div className="mt-6 flex justify-start gap-10">
                            <a href="#contact">Hire Me</a>
                            <a href={Resume} download className="rounded">Download Resume</a>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <img src={Headshot} alt="Headshot" className="w-full max-w-sm mx-auto order-1 md:order-2"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
