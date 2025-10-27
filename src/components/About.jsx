const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Who Am I?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src="https://via.placeholder.com/300"
                alt="Profile"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-gray-900"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              Hello! I'm a passionate developer who loves creating innovative
              solutions and bringing ideas to life through code.
            </p>
            <p className="text-lg leading-relaxed">
              With expertise in web development and a keen eye for design, I
              build modern, responsive, and user-friendly applications that make
              a difference.
            </p>
            <p className="text-lg leading-relaxed">
              I'm always eager to learn new technologies and take on challenging
              projects that push my boundaries. My journey has taken me through
              full-stack development, AI exploration, and creating experiences
              that blend creativity with functionality.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Arv2023"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
