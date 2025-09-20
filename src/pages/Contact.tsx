import Email from '../assets/icon-email.png'
import LinkedIn from '../assets/icon-linkedin.png'
import Calendar from '../assets/icon-calendar.png'
import Youtube from "../assets/icon-youtube.png"

const Contact = () => {
    return(
        <div id="contact">
            <h2 className="flex justify-start font-bold text-4xl text-white mb-5">CONTACT</h2>
            <hr  className="mb-6 border-slate-700"></hr>

            <h2 className="text-slate-400 text-left text-3xl"> Say 👋! Whether it’s coding, collabs, or just a hello... I’m just a click away. </h2>
            <ul className="text-2xl">
                <li>
                    <span>📅</span>
                    <span> Let's grab some time. </span>
                </li>
                <li>
                    <span>📧</span>
                    <span> Shoot me a message. </span>
                </li>
                <li>
                    <span>📹</span>
                    <span> Check out what I'm upto on YouTube.</span>
                </li>
            </ul>
        </div>
    )
}

export default Contact