const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '💻',
      skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React / Vue.js', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Python', 'REST APIs', 'Express.js', 'Database Design'],
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: ['Git & GitHub', 'VS Code', 'Figma', 'Vite', 'Agile/Scrum'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">What I Use</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 card-hover"
            >
              <div className="text-5xl mb-4 text-center">{category.icon}</div>
              <h3 className="text-2xl font-bold text-center mb-6 gradient-text">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
