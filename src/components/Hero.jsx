const Hero = () => {
  return (
    <header id="top" className="relative min-h-screen flex flex-col justify-end p-[clamp(4rem,10vw,8rem)] pb-[clamp(4rem,10vw,8rem)] pl-[clamp(2rem,9vw,8rem)] text-[#fdfbff]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,10,22,0.65)] via-[rgba(7,10,22,0.85)] to-[rgba(7,10,22,0.95)] z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[640px]">
        <span className="text-[0.95rem] tracking-[0.45em] uppercase text-gray-300/65">
          Portfolio of
        </span>
        <h1 className="font-playfair italic font-bold text-[clamp(4.5rem,12vw,9rem)] tracking-[0.08em] my-3">
          Arviind
        </h1>
        <p className="text-[clamp(1.4rem,3vw,2rem)] font-medium text-gray-200/85">
          AI Developer & Enthusiast
        </p>
        <p className="mt-6 text-[1.05rem] max-w-[520px] text-gray-200/75">
          I build immersive web experiences, intuitive products, and data-driven tools that blend creativity with code.
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-10 flex gap-4 flex-wrap">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-10 py-3.5 rounded-full font-semibold tracking-wide text-white bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_18px_45px_rgba(99,102,241,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(167,139,250,0.35)]"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-10 py-3.5 rounded-full font-semibold tracking-wide text-gray-200/90 border border-gray-200/40 bg-slate-900/45 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gray-200/15 hover:border-gray-200/70"
          >
            Let's Talk
          </a>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="absolute top-[clamp(1.5rem,4vw,3rem)] right-[clamp(1.5rem,8vw,6rem)] flex gap-7 text-[0.95rem] tracking-[0.16em] uppercase z-10 max-md:static max-md:mt-12 max-md:justify-center max-md:flex-wrap">
        <a href="#about" className="text-gray-200/55 no-underline transition-colors duration-300 hover:text-white">About</a>
        <a href="#skills" className="text-gray-200/55 no-underline transition-colors duration-300 hover:text-white">Skills</a>
        <a href="#projects" className="text-gray-200/55 no-underline transition-colors duration-300 hover:text-white">Projects</a>
        <a href="#contact" className="text-gray-200/55 no-underline transition-colors duration-300 hover:text-white">Contact</a>
      </nav>
    </header>
  )
}

export default Hero
