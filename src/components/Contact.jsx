const ContactCard = ({ icon, title, link, linkText }) => {
  return (
    <div className="bg-slate-900/[0.78] rounded-[20px] p-8 text-center border border-indigo-400/20 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-300/60">
      <span className="text-3xl inline-block mb-4">{icon}</span>
      <h3 className="text-xl mb-3 text-indigo-100/90">{title}</h3>
      <a 
        href={link}
        target={link.startsWith('mailto') ? undefined : '_blank'}
        rel={link.startsWith('mailto') ? undefined : 'noopener noreferrer'}
        className="text-violet-300/95 no-underline font-medium break-words hover:underline"
      >
        {linkText}
      </a>
    </div>
  )
}

const Contact = () => {
  const contacts = [
    {
      icon: "📧",
      title: "Email",
      link: "mailto:arviind115@email.com",
      linkText: "arviind115a@email.com"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/arviindshankar",
      linkText: "linkedin.com/in/arviindshankar"
    },
    {
      icon: "🐙",
      title: "GitHub",
      link: "https://github.com/Arv2023",
      linkText: "github.com/Arv2023"
    }
  ]

  return (
    <section id="contact" className="animate-fade-in-up bg-[rgba(10,14,32,0.82)] border border-slate-400/15 rounded-[28px] p-[clamp(3rem,6vw,4.5rem)] backdrop-blur-[14px] shadow-[0_45px_80px_rgba(15,23,42,0.35)]">
      <div className="flex flex-col gap-3 mb-10">
        <h2 className="font-playfair text-[clamp(2.8rem,6vw,3.8rem)] font-bold tracking-wide">
          Let's Collaborate
        </h2>
        <span className="text-[0.95rem] uppercase tracking-[0.4em] text-slate-400/60">
          Open to new opportunities
        </span>
      </div>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </section>
  )
}

export default Contact
