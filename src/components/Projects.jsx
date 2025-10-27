const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills with React and Tailwind CSS.',
      icon: '🌐',
      tags: ['React', 'Tailwind', 'Vite'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Web Application',
      description: 'A full-stack web application with modern features, clean UI, and seamless user experience.',
      icon: '📱',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Design System',
      description: 'A comprehensive design system for consistent UI components across multiple projects.',
      icon: '🎨',
      tags: ['Figma', 'CSS', 'Documentation'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">What I Build</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 card-hover"
            >
              {/* Project Icon/Header */}
              <div
                className={`h-40 flex items-center justify-center text-6xl bg-gradient-to-br ${project.gradient}`}
              >
                {project.icon}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
