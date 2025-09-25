import { useState } from "react"
import { experiences } from "../data/experiences"
import ExperiencesCard from "../../src/components/Experiences/ExperiencesCard"

const categories = ["Professional", "Leadership", "Community"] as const

const Experiences = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof experiences>("Professional")

  return (
    <section id="experiences" className="px-6 py-14">
      <h2 className="mb-6 font-bold text-white text-4xl flex text-left">EXPERIENCES</h2>
      <hr className="mb-6 border-slate-700" />

      {/* Tab Buttons */}
      <div className="flex gap-6 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`flex-1 px-4 py-2 rounded-lg transition ${
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
          <ExperiencesCard key={i} {...exp} />
        ))}
      </ul>
    </section>
  )
}

export default Experiences
