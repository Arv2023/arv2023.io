const SkillCard = ({ title, skills }) => {
  return (
    <div className="bg-gray-900/[0.88] rounded-[22px] p-8 border border-slate-400/[0.18] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.015)] transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-400/45">
      <h3 className="text-[1.4rem] text-violet-300 mb-5">{title}</h3>
      <ul className="list-none grid gap-3">
        {skills.map((skill, index) => (
          <li 
            key={index}
            className="text-slate-200/80 text-[0.98rem] pl-6 relative before:content-[''] before:absolute before:left-1.5 before:top-2.5 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-br before:from-purple-500 before:to-indigo-500"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML & CSS", "JavaScript", "Responsive Design"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "REST APIs", "Database Design"]
    },
    {
      title: "Workflow",
      skills: ["Git & GitHub", "VS Code", "Agile / Scrum"]
    }
  ]

  return (
    <section id="skills" className="animate-fade-in-up bg-[rgba(10,14,32,0.82)] border border-slate-400/15 rounded-[28px] p-[clamp(3rem,6vw,4.5rem)] backdrop-blur-[14px] shadow-[0_45px_80px_rgba(15,23,42,0.35)]">
      <div className="flex flex-col gap-3 mb-10">
        <h2 className="font-playfair text-[clamp(2.8rem,6vw,3.8rem)] font-bold tracking-wide">
          Skills & Tools
        </h2>
        <span className="text-[0.95rem] uppercase tracking-[0.4em] text-slate-400/60">
          Stack of choice
        </span>
      </div>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-7">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} {...category} />
        ))}
      </div>
    </section>
  )
}

export default Skills
