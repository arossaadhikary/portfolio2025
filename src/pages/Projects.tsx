import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "../components/Projects/ProjectCard"
import { projects } from "../data/projects"

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <div id="projects">
      <h2 className="flex justify-start text-white text-4xl font-bold mb-6">PROJECTS</h2>
      <hr />

      {/* Projects Grid with animation */}
      <div className="my-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {currentProjects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className="px-3 py-1 text-white disabled:opacity-50"
        >
          &lt;
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-xl ${
              currentPage === i + 1
                ? "bg-slate-700 text-white"
                : "text-gray-300 hover:bg-slate-600"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="px-3 py-1 text-white disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  )
}

export default Projects
