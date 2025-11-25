const About = () => {
  const highlights = [
    {
      icon: "🧠",
      title: "AI & Machine Learning",
      description: "Building intelligent systems that predict, classify, and generate."
    },
    {
      icon: "📊",
      title: "Data Visualization",
      description: "Translating complex datasets into intuitive, actionable narratives."
    },
    {
      icon: "⚡",
      title: "Full-Stack Products",
      description: "Delivering seamless experiences from backend architecture to pixel-perfect UI."
    }
  ]

  return (
    <section id="about" className="animate-section">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-4">
          About Me
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-4">
          Who Am I?
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto">
          Blending creativity and code to build the future
        </p>
      </div>

      {/* Main content card */}
      <div className="glass-card rounded-3xl p-8 md:p-12 mb-8">
        <p className="text-lg text-white/70 leading-relaxed mb-8">
          I'm a passionate developer who thrives on turning ambitious ideas into polished, interactive realities. From training neural networks to crafting immersive interfaces, I approach every challenge with curiosity and craftsmanship.
        </p>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/5 border border-white/5 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-purple-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50 -z-10"></div>
            </div>
          ))}
        </div>

        <p className="text-lg text-white/70 leading-relaxed">
          I believe in learning by doing, experimenting boldly, and sharing what I discover. My work is driven by curiosity, collaboration, and the desire to make something memorable.
        </p>
      </div>
    </section>
  )
}

export default About
