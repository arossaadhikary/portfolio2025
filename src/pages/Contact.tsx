import Email from '../assets/icon-email.png'
import LinkedIn from '../assets/icon-linkedin.png'
import Calendar from '../assets/icon-calendar.png'
import Youtube from "../assets/icon-youtube.png"
import GitHub from '../assets/icon-github.png'

const Contact = () => {
    return (
        <div id="connect">
            <h2 className="flex justify-start font-bold text-4xl text-white mb-5">CONNECT</h2>
            <hr className="mb-6 border-slate-700"></hr>

            <h2 className="text-2xl text-slate-300 text-center">
                Say 👋! Whether it’s coding, collabs, or just a hello... I’m just a click away.
            </h2>

            <div className="flex justify-center space-x-8 mt-3">
                <a href="mailto:arossa.adhikaryc@gmail.com"><img src={Email} alt="Email" className="h-10 w-10 mt-6 mb-4 mx-auto hover:opacity-70 transition"/></a>
                <a href="https://www.youtube.com/@arossa" target="_blank"><img src={Youtube} alt="Youtube" className="h-10 w-10 mt-6 mb-4 mx-auto hover:opacity-70 transition"/></a>
                <a href="https://www.linkedin.com/in/arossaadhikary/" target="_blank"><img src={LinkedIn} alt="LinkedIn" className="h-10 w-10 mt-6 mb-4 mx-auto hover:opacity-70 transition"/></a>
                <a href="https://github.com/arossaadhikary" target="_blank"><img src={GitHub} alt="GitHub" className="h-10 w-10 mt-6 mb-4 mx-auto hover:opacity-70 transition"/></a>
            </div>

            <ul className="text-2xl space-y-4">
                <div className="mt-4 flex justify-center">
                    <iframe
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2B_ycPzVQghYMOMAiv3LyJtIozrE6lUojZIxhS-sEJB0wUcDQ15XWVDtSdNo9VwjDAToPhx2b1?gv=true"
                        style={{ border: 0, backgroundColor: 'white' }}
                        width="80%"
                        height="500"
                        frameBorder="0"
                    ></iframe>
                </div>
            </ul>
        </div>
    )
}

export default Contact
