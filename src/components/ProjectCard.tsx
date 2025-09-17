import GitHub from '../assets/icon-github.png'
import Output from "../assets/icon-output.png"

type ProjectCardProps = {
    title: string;
    image: string;
    description: string;
    githubUrl?: string;
    projectUrl?: string;
}

const ProjectCard = ({ title, image, description, githubUrl, projectUrl}: ProjectCardProps) => {
    return (
        <section>
            {/* Image */}
            <img src={image}></img>
            
            {/* Grid Wraper for Title, GitHub & Output */}
            <div className="flex items-start justify-between my-4">
                <div className="flex justify-start text-2xl font-bold text-white">
                    {/* Project Title */}
                    <h3 className="text-left max-w-[80%] leading-none">
                        {title}
                    </h3>
                </div>
                
                <div className="flex gap-5 shrink-0">
                    {/* GitHub & Output */}
                    {githubUrl && (
                        < a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            <img src={GitHub} alt="GitHub" className="h-6 w-6 hover:opacity-70 transition"/>
                        </a>
                    )}
                    {projectUrl && (
                        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                            <img src={Output} alt="Output" className="h-6 w-6 hover:opacity-70 transition"/>
                        </a>
                    )}
                </div>
            </div>
           
            {/* Description */}
            <p className="text-left text-slate-300 leading-relaxed line-clamp-4">
                {description}
            </p>
        </section>
    )
}

export default ProjectCard