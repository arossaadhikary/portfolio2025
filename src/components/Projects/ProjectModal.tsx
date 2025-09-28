// components/Projects/ProjectModal.tsx
import { motion } from "framer-motion";
import Skill from "./SkillButton";
import GitHub from "../../assets/icon-github.png";
import Output from "../../assets/icon-output.png";

type ProjectModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    image: string;
    description: string;
    githubUrl?: string;
    projectUrl?: string;
    skills: string[];
  } | null;
};

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 text-white rounded-2xl shadow-2xl ring-1 ring-slate-700 max-w-5xl w-full p-8 relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl"
        >
          ✕
        </button>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-6">
          {/* Left side: Title + description + skills */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-left">
              {project.title}
            </h2>
            <p className="text-slate-300 leading-relaxed text-left mb-6 text-sm md:text-base">
              {project.description}
            </p>
            {project.skills && project.skills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.skills.map((s, i) => (
                  <Skill key={i} skill={s} />
                ))}
              </div>
            )}
          </div>

          {/* Right side: Image + icons */}
          <div className="flex flex-col justify-center">
            {/* Image centered */}
            <div className="flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 max-w-full"
              />
            </div>

            {/* Icons aligned to right edge of image */}
            <div className="flex justify-end gap-6">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={GitHub}
                    alt="GitHub"
                    className="h-7 w-7 hover:scale-110 transition-transform duration-200"
                  />
                </a>
              )}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Output}
                    alt="Output"
                    className="h-7 w-7 hover:scale-110 transition-transform duration-200"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
