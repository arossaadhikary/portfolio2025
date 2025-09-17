import ProjectCard from "./ProjectCard"

import P_Clarfina from "../assets/preview-clarfina.png"
import P_EWB from "../assets/preview-ewb.png"
import P_PageTurners from "../assets/preview-pageturners.png"
import P_WiNGHacks from "../assets/preview-winghacks.png"

const Projects = () => {
    return (
        <div id="projects">
            <h2 className="flex justify-start text-white text-4xl font-bold mb-6">PROJECTS</h2>
            <hr></hr>

            <div className = "grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
                <ProjectCard
                    title="Clarfina"
                    image={P_Clarfina}
                    description="Clarifina revolutionizes financial literacy by offering personalized, expert financial advice tailored to each user’s unique background and needs. With intuitive PDF uploads, it highlights key sections, simplifies complex terms, and delivers AI-powered recommendations based on individual profiles. Empowering users to make informed decisions, the platform provides clear, actionable insights that drive smarter financial outcomes and lasting success."
                    githubUrl="https://github.com/aarnavgautam/clarifin-ai"
                    projectUrl="https://devpost.com/software/clarifina"
                />
                <ProjectCard
                    title="Engineering Without Borders Website"
                    image={P_EWB}
                    description="Leading a team, the website was developed using responsive design principles and React, based on custom Figma wireframes, with Firebase user authentication and real-time notifications to inform applicants of their status. It supports the University of Florida’s Engineers Without Borders chapter, which empowers communities in Nepal and Peru through engineering projects that address basic human needs."
                    githubUrl="https://github.com/ufewb/UF_EWB"
                    projectUrl="https://ufewb.org"
                />
                <ProjectCard
                    title="PageTurners"
                    image={P_PageTurners}
                    description="PageTurners is your go-to app for finding personalized book recommendations. It analyzes book descriptions to suggest the most relevant titles, ensures accurate book identification through a custom-built Flask API, & delivers fast recommendations by optimizing performance."
                    githubUrl="https://github.com/marin-isabella/PageTurners"
                    projectUrl="https://www.youtube.com/watch?v=ARF130incFA&t=46s"
                />
                <ProjectCard
                    title="WiNGHacks"
                    image={P_WiNGHacks}
                    description="WiNGHacks is the official hub for UF's 1st hackathon dedicated to women and nonbinary individuals. The site offers an engaging and interactive experience, featuring easily accessible information on FAQs, sponsorship opportunities, and the event's workshop schedule. A streamlined application portal was created to handle over 200 participants, ensuring a smooth and welcoming user experience for all attendees"
                    githubUrl="https://github.com/WiNGHacks/WiNGHacks-Website"
                    projectUrl="https://www.winghacks.com/"
                />
            </div>
            
        </div>
    )
}

export default Projects