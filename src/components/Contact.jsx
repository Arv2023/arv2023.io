const ContactCard = ({ icon, title, link, linkText, color }) => {
  return (
    <a 
      href={link}
      target={link.startsWith('mailto') ? undefined : '_blank'}
      rel={link.startsWith('mailto') ? undefined : 'noopener noreferrer'}
      className="group relative glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-purple-500/30 block no-underline"
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-2xl ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10 blur-2xl`}></div>
      
      <span className="text-4xl block mb-4 transition-transform duration-300 group-hover:scale-110">{icon}</span>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <span className="text-purple-300/80 text-sm break-words group-hover:text-purple-200 transition-colors">
        {linkText}
      </span>
    </a>
  )
}

const Contact = () => {
  const contacts = [
    {
      // icon: "📧",
      title: "Email",
      link: "mailto:arviind115@email.com",
      linkText: "arviind115a@email.com",
      color: "bg-red-500/20"
    },
    {
      //icon: "💼",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/arviindshankar",
      linkText: "linkedin.com/in/arviindshankar",
      color: "bg-blue-500/20"
    },
    {
      // icon: "🐙",
      title: "GitHub",
      link: "https://github.com/Arv2023",
      linkText: "github.com/Arv2023",
      color: "bg-purple-500/20"
    }
  ]

  return (
    <section id="contact" className="animate-section">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase text-purple-300 bg-purple-500/10 border border-purple-500/20 mb-4">
          Get In Touch
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold gradient-text mb-4">
          Let's Collaborate
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto">
          Open to new opportunities and exciting projects
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>

      {/* CTA Card */}
      <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-indigo-500/10"></div>
        
        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have a project in mind?
          </h3>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            I'm always excited to work on innovative ideas. Let's create something amazing together!
          </p>
          <a 
            href="mailto:arviind115@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
          >
            <span>Send me a message</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
