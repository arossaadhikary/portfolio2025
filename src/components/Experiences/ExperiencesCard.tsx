import { ChevronDown } from "lucide-react"

type ExperienceCardProps = {
  position: string
  company: string
  date: string
  bullets?: string[]
  isOpen: boolean
  onToggle: () => void
}

const ExperiencesCard = ({ position, company, date, bullets, isOpen, onToggle }: ExperienceCardProps) => {
  return (
    <li className="flex flex-col text-white px-4 sm:ml-6 md:ml-10 md:mr-20">
      {/* Top row */}
      <div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center gap-2">
          <ChevronDown
            className={`h-5 w-5 text-slate-400 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
          <h3 className="text-base sm:text-lg font-semibold text-left">{position}</h3>
        </div>
        <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-0 sm:ml-2 ml-7 text-left md:text-right">{date}</p>
      </div>

      <p className="text-slate-500 text-xs sm:text-sm ml-7 mt-1 text-left">{company}</p>

      {isOpen && (
        <ul className="mt-3 ml-7 list-disc list-inside text-slate-300 space-y-1">
          {bullets?.map((bullet, i) => (
            <li className="text-left text-sm sm:text-base" key={i}>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default ExperiencesCard
