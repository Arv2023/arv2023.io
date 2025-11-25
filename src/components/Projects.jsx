const ProjectCard = ({ icon, tagline, title, link, description, tags, index }) => {
  return (
    <article className={`group relative glass-card rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/30 animate-section stagger-${index + 1}`}>
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10 blur-xl"></div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <span className="text-xs font-medium tracking-widest uppercase text-purple-300/80 bg-purple-500/10 px-3 py-1 rounded-full">
            {tagline}
          </span>
        </div>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 text-white/50 transition-all duration-300 hover:bg-purple-500/20 hover:text-purple-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-inherit no-underline"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      
      <p className="text-white/60 mb-6 leading-relaxed">
        {description}
      </p>
      
      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, idx) => (
          <span 
            key={idx}
            className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-white/70 border border-white/10 transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

const Projects = () => {
  const projects = [
    {
      icon: "🌐",
      tagline: "Web Experience",
      title: "Website Development",
      link: "https://arv2023.github.io/OSIP/",
      description: "A collaborative site promoting locally produced passion fruit syrup from Malino, South Sulawesi. Blends storytelling, product highlights, and social proof to help local makers reach a global audience.",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      icon: "🎮",
      tagline: "Full-Stack",
      title: "Blackjack & Fitness Game",
      link: "https://github.com/ST0503-BED/bed-ca2-Arv2023",
      description: "A full-stack web application featuring an interactive Blackjack card game and fitness tracking system. Players can enjoy classic casino gameplay while monitoring their workout progress through an integrated fitness dashboard.",
      tags: ["MySQL", "Node.js", "JavaScript", "HTML"]
    },
    {
      icon: "🤖",
      tagline: "AI / ML",
      title: "AI Chatbot",
      link: null,
      description: "An AI-powered chatbot built using the OpenAI ChatGPT API. It provides natural language conversation, contextual responses, and content generation with secure server-side API integration and prompt-engineering for improved relevance.",
      tags: ["Python", "OpenAI API", "NLP"]
    }
  ]

  return (
    <section id="projects" className="animate-section">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-4">
          Portfolio
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-4">
          What I Build
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto">
          Selected projects & experiments
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
