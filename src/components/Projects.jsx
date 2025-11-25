const ProjectCard = ({ icon, tagline, title, link, description, tags }) => {
  return (
    <article className="bg-slate-900/85 rounded-3xl p-9 border border-indigo-500/15 transition-all duration-[350ms] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] hover:-translate-y-2 hover:border-violet-300/55 hover:shadow-[0_25px_60px_rgba(76,29,149,0.35)]">
      <div className="flex items-center gap-3 text-indigo-300/80 uppercase tracking-[0.3em] text-xs mb-5">
        {icon && <span className="text-2xl">{icon}</span>}
        <span>{tagline}</span>
      </div>
      
      <h3 className="text-[1.65rem] text-slate-50 mb-4 font-semibold">
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-inherit no-underline border-b border-transparent pb-0.5 transition-colors duration-300 hover:border-violet-300/70"
          >
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      
      <p className="text-slate-200/80 mb-6 text-[1.02rem] leading-7">
        {description}
      </p>
      
      <ul className="flex gap-3 flex-wrap">
        {tags.map((tag, index) => (
          <li 
            key={index}
            className="list-none bg-indigo-500/[0.18] border border-indigo-400/35 text-indigo-100/85 px-4 py-1.5 rounded-full text-[0.85rem] tracking-wide"
          >
            {tag}
          </li>
        ))}
      </ul>
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
      icon: "📱",
      tagline: "Full-Stack",
      title: "Blackjack & Fitness Game",
      link: "https://github.com/ST0503-BED/bed-ca2-Arv2023",
      description: "A full-stack web application featuring an interactive Blackjack card game and fitness tracking system. Players can enjoy classic casino gameplay while monitoring their workout progress through an integrated fitness dashboard.",
      tags: ["MySQL", "Node.js", "JavaScript", "HTML"]
    },
    {
      icon: "🤖",
      tagline: "Chatbot",
      title: "AI Chatbot",
      link: null,
      description: "An AI-powered chatbot built using the OpenAI ChatGPT API. It provides natural language conversation, contextual responses, and content generation. The implementation uses a secure server-side API key to call the ChatGPT endpoints, includes prompt-engineering for improved relevance, and supports integration into web apps for automated support, FAQs, and interactive experiences.",
      tags: ["Python", "HTML", "Documentation"]
    }
  ]

  return (
    <section id="projects" className="animate-fade-in-up bg-[rgba(10,14,32,0.82)] border border-slate-400/15 rounded-[28px] p-[clamp(3rem,6vw,4.5rem)] backdrop-blur-[14px] shadow-[0_45px_80px_rgba(15,23,42,0.35)]">
      <div className="flex flex-col gap-3 mb-10">
        <h2 className="font-playfair text-[clamp(2.8rem,6vw,3.8rem)] font-bold tracking-wide">
          What I Build
        </h2>
        <span className="text-[0.95rem] uppercase tracking-[0.4em] text-slate-400/60">
          Selected projects & experiments
        </span>
      </div>
      
      <div className="grid gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
