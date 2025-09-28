import GitHub from '../../assets/icon-github.png';
import Output from "../../assets/icon-output.png";
import Skill from './SkillButton';
import type { Project } from "../../types/Project";

type ProjectCardProps = Project & {
  onImageClick?: () => void;
};

const ProjectCard = ({ title, image, githubUrl, projectUrl, skills, onImageClick }: ProjectCardProps) => {
  return (
    <section>
      {/* Image (clickable) */}
      <img 
        src={image} 
        alt={title}
        className="rounded-3xl cursor-pointer hover:opacity-80 transition" 
        onClick={onImageClick} 
      />

      {/* Title + icons */}
      <div className="flex items-start justify-between my-4">
        <div className="flex justify-start text-2xl font-bold text-white">
          <h3 className="text-left max-w-[80%] leading-none">
            {title}
          </h3>
        </div>
        <div className="flex gap-5 shrink-0">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
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

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-4">
          {skills.map((s, i) => (
            <Skill key={i} skill={s} />
          ))}
        </div>
      )}
    </section>
  )
};

export default ProjectCard;
