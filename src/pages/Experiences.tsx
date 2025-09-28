import { useState } from "react"
import { experiences } from "../data/experiences"
import ExperiencesCard from "../../src/components/Experiences/ExperiencesCard"

const categories = ["Professional", "Leadership", "Community"] as const

const Experiences = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof experiences>("Professional")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index) // close if clicked again
  }

  return (
    <section id="experiences" className="px-4 sm:px-6 py-10 sm:py-14">
      {/* Heading */}
      <h2 className="mb-4 font-bold text-white text-3xl sm:text-4xl text-left">
        EXPERIENCES
      </h2>
      <hr className="mb-6 border-slate-700" />

      {/* Tab Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveTab(cat)
              setOpenIndex(null) // reset open state when switching tabs
            }}
            className={`flex-1 px-4 py-2 rounded-lg transition text-sm sm:text-base ${
              activeTab === cat
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <ul className="space-y-4">
        {experiences[activeTab].map((exp, i) => (
          <ExperiencesCard
            key={i}
            {...exp}
            isOpen={openIndex === i}
            onToggle={() => handleToggle(i)}
          />
        ))}
      </ul>
    </section>
  )
}

export default Experiences
