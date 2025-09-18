import Headshot from '../assets/headshot.png'
import Resume from '../../public/ArossaAdhikaryResume.pdf'

const Intro = () => {
  return (
    <section id="intro" className="text-white">
      <div className="mx-auto max-w-6xl px-6 py-5">
        {/* Grid wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Text */}
          <div className="order-2 md:order-1 text-left">
            <h1 className="text-6xl mb-7 md:text-5xl font-extrabold flex items-center gap-3">
              Hello - I'm Arossa 
              <span role="img" aria-label="wave" className="animate-wave">👋</span>
            </h1>
            <h2 className="mt-2 text-2xl mb-10 text-slate-300">
              <em>Welcome to my developer journey.</em>
            </h2>
            <p className="mt-4 text-xl text-slate-300 leading-relaxed">
              I'm a passionate developer from Tampa, FL. I enjoy creating web/IOS applications & expanding into the cybersecurity sphere. I have experience with Python, Javascript, & C++.
            </p>
            <div className="mt-10 flex justify-start gap-5 font-semibold">
              <a
                href="#contact"
                className="rounded-full border-2 bg-white text-[#0a192f] px-10 py-3"
              >
                Hire Me
              </a>
              <a
                href={Resume}
                download
                className="rounded-full border-2 border-white px-10 py-3"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src={Headshot}
              alt="Headshot"
              className="w-full max-w-md mx-auto order-1 md:order-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
