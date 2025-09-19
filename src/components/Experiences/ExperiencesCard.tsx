import { useState } from "react"
import { ChevronDown } from "lucide-react"

type ExperienceCardProps = {
  position: string
  company: string
  date: string
  bullets?: string[]
}

const ExperiencesCard = ({ position, company, date, bullets }: ExperienceCardProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <li className={`flex flex-col text-white ml-10 mr-20`}
        >
            {/* Top row: Chevron + Position + Date */}
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {/* Left side: Chevron + Position */}
                <div className="flex items-center gap-2">
                    <ChevronDown
                        className={`h-5 w-5 text-slate-400 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                        }`}
                    />
                    <h3 className="text-lg font-semibold text-left">{position}</h3>
                </div>

                {/* Right side: Date */}
                <p className="text-slate-400 text-sm">{date}</p>
            </div>

            {/* Second line: Company */}
            <p className="text-slate-500 text-sm ml-7 flex justify-left">{company}</p>

            {/* Collapsible Sub-bullets */}
            {isOpen && (
                <ul className="mt-3 ml-10 list-disc list-inside text-slate-300 space-y-1 ">
                {bullets?.map((bullet, i) => (
                    <li className="text-left" key={i}>{bullet}</li>
                ))}
                </ul>
            )}

        </li>       
    )
}

export default ExperiencesCard
