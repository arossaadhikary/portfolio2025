import Email from '../assets/icon-email.png'
import LinkedIn from '../assets/icon-linkedin.png'
import Youtube from "../assets/icon-youtube.png"
import GitHub from '../assets/icon-github.png'

const Contact = () => {
  return (
    <div id="connect" className="px-4 sm:px-6 lg:px-12">
        <h2 className="font-bold text-3xl sm:text-4xl text-white mb-5 text-left">
        CONNECT
        </h2>
        <hr className="mb-6 border-slate-700" />

        <h2 className="text-base sm:text-lg md:text-xl text-slate-300 text-center mb-6">
        Say
        <span role="img" aria-label="wave" className="inline-block animate-wave origin-bottom-right">
            👋
        </span>
        ! Whether it’s coding, collabs, or just a hello... I’m just a click away.
        </h2>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-3">
        <a href="mailto:arossa.adhikaryc@gmail.com">
            <img
            src={Email}
            alt="Email"
            className="h-8 w-8 sm:h-8 sm:w-8 hover:opacity-70 transition"
            />
        </a>
        <a href="https://www.youtube.com/@arossa" target="_blank">
            <img
            src={Youtube}
            alt="Youtube"
            className="h-8 w-8 sm:h-8 sm:w-8 hover:opacity-70 transition"
            />
        </a>
        <a href="https://www.linkedin.com/in/arossaadhikary/" target="_blank">
            <img
            src={LinkedIn}
            alt="LinkedIn"
            className="h-8 w-8 sm:h-8 sm:w-8 hover:opacity-70 transition"
            />
        </a>
        <a href="https://github.com/arossaadhikary" target="_blank">
            <img
            src={GitHub}
            alt="GitHub"
            className="h-8 w-8 sm:h-8 sm:w-8 hover:opacity-70 transition"
            />
        </a>
        </div>

        {/* Calendar Embed */}
        <div className="mt-6 flex justify-center">
        <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2B_ycPzVQghYMOMAiv3LyJtIozrE6lUojZIxhS-sEJB0wUcDQ15XWVDtSdNo9VwjDAToPhx2b1?gv=true"
            style={{ border: 0, backgroundColor: 'white' }}
            className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 h-[400px] sm:h-[500px] rounded-lg shadow-lg"
            frameBorder="0"
        ></iframe>
        </div>
    </div>
  )
}

export default Contact
