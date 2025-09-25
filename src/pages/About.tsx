import AboutHeadshot from "../assets/aboutHeadshot.png"

const About = () => {
    return (
        <section id="about">
            <h2 className="flex justify-start mb-6 text-4xl font-bold text-white">ABOUT</h2>
            <hr className="mb-6 border-slate-700"></hr>
            {/* Grid Wrapper */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <img src={AboutHeadshot} className="mx-auto max-w-sm"></img>
                <div className="text-left text-lg text-slate-300 leading-relaxed">
                    <p className="mb-10">
                        My name is Arossa - I'm an ambitious, goal-oriented, 3nd-year undergraduate honors student at the University of Florida (Go Gators!). 
                    </p>
                    <p >
                        I strive to use my coding knowledge to make a social impact, with a specific interest in protecting design, digital infrastructure & education. I gravitate towards activities involving STEM education & mentorship, specifically for women & the youth. I'm aligning my career with artificial intelligence in the cybersecurity domain by studying for my Security+ certification (expected completion Sept 2025).                
                    </p>
                </div>
            </div>
       </section>
    )
}

export default About

// mx-auto = horizontal margin auto - centers img inside grid cell