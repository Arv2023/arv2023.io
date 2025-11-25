const SkillCard = ({ title, skills, icon, gradient }) => {
  return (
    <div className={`group relative glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-purple-500/30`}>
      {/* Gradient glow on hover */}
      <div className={`absolute inset-0 rounded-2xl ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10 blur-2xl`}></div>
      
      <div className="flex items-center gap-3 mb-5">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li 
            key={index}
            className="flex items-center gap-3 text-white/70 text-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400"></span>
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
      icon: "🎨",
      title: "Frontend",
      skills: ["HTML & CSS", "JavaScript", "React", "Responsive Design"],
      gradient: "bg-pink-500/20"
    },
    {
      icon: "⚙️",
      title: "Backend",
      skills: ["Node.js", "Python", "REST APIs", "Database Design"],
      gradient: "bg-blue-500/20"
    },
    {
      icon: "🛠️",
      title: "Workflow",
      skills: ["Git & GitHub", "VS Code", "Agile / Scrum"],
      gradient: "bg-purple-500/20"
    }
  ]

  // Tech stack with logos
  const techStack = [
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
    { name: "Python", color: "from-blue-400 to-blue-600" },
    { name: "React", color: "from-cyan-400 to-cyan-600" },
    { name: "Node.js", color: "from-green-400 to-green-600" },
    { name: "MySQL", color: "from-orange-400 to-orange-600" },
    { name: "Git", color: "from-red-400 to-red-600" },
  ]

  return (
    <section id="skills" className="animate-section">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-4">
          Expertise
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-4">
          Skills & Tools
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto">
          Technologies I work with
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} {...category} />
        ))}
      </div>

      {/* Tech Stack Marquee */}
      <div className="glass-card rounded-2xl p-6 overflow-hidden">
        <p className="text-center text-sm text-white/40 mb-4 tracking-widest uppercase">Tech Stack</p>
        <div className="flex justify-center gap-4 flex-wrap">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} bg-opacity-10 border border-white/10 text-white/90 text-sm font-medium transition-all duration-300 hover:scale-110 hover:border-white/30`}
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
