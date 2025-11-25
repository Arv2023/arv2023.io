const Hero = () => {
  return (
    <header id="top" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 flex justify-center gap-8 py-6 px-6 text-sm tracking-widest uppercase z-20">
        <a href="#about" className="text-white/50 no-underline transition-all duration-300 hover:text-white hover:tracking-[0.2em]">About</a>
        <a href="#skills" className="text-white/50 no-underline transition-all duration-300 hover:text-white hover:tracking-[0.2em]">Skills</a>
        <a href="#projects" className="text-white/50 no-underline transition-all duration-300 hover:text-white hover:tracking-[0.2em]">Projects</a>
        <a href="#contact" className="text-white/50 no-underline transition-all duration-300 hover:text-white hover:tracking-[0.2em]">Contact</a>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl animate-section">
        {/* Decorative badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm text-purple-300/90 tracking-wide">Available for opportunities</span>
        </div>

        <h1 className="font-playfair italic font-bold text-[clamp(3.5rem,10vw,7rem)] leading-[1.1] mb-6 gradient-text">
          Arviind
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-white/80 mb-4">
          <span className="gradient-text-purple font-medium">AI Developer</span> & Enthusiast
        </p>
        
        <p className="text-lg text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
          I build immersive web experiences, intuitive products, and data-driven tools that blend creativity with code.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-white overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></span>
            <span className="relative flex items-center gap-2">
              View Projects
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          <a 
            href="#contact" 
            className="group inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-white/90 border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Let's Talk
              <svg className="w-4 h-4 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  )
}

export default Hero
