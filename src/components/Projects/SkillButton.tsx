interface SkillProps {
    skill: string
}

const Skill = ({ skill }: SkillProps) => (
    <button className=" rounded-full border-2 text-slate-300 border-slate-300 px-3 py-2 m-1 text-xs font-mono pointer-events-none disabled">
        <em>{skill}</em>
    </button>
);

export default Skill