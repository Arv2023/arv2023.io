const About = () => {
  const highlights = [
    {
      title: "AI & Machine Learning:",
      description: "Building intelligent systems that predict, classify, and generate."
    },
    {
      title: "Data Visualization:",
      description: "Translating complex datasets into intuitive, actionable narratives."
    },
    {
      title: "Full-Stack Products:",
      description: "Delivering seamless experiences from backend architecture to pixel-perfect UI."
    }
  ]

  return (
    <section id="about" className="animate-fade-in-up bg-[rgba(10,14,32,0.82)] border border-slate-400/15 rounded-[28px] p-[clamp(3rem,6vw,4.5rem)] backdrop-blur-[14px] shadow-[0_45px_80px_rgba(15,23,42,0.35)]">
      <div className="flex flex-col gap-3 mb-10">
        <h2 className="font-playfair text-[clamp(2.8rem,6vw,3.8rem)] font-bold tracking-wide">
          Who Am I?
        </h2>
        <span className="text-[0.95rem] uppercase tracking-[0.4em] text-slate-400/60">
          Blending creativity and code
        </span>
      </div>
      
      <div>
        <p className="text-[1.05rem] text-slate-200/85 mb-6">
          I'm a passionate developer who thrives on turning ambitious ideas into polished, interactive realities. From training neural networks to crafting immersive interfaces, I approach every challenge with curiosity and craftsmanship.
        </p>
        
        <ul className="list-none grid gap-3.5 my-6 mb-8">
          {highlights.map((item, index) => (
            <li 
              key={index}
              className="bg-indigo-500/[0.08] border border-indigo-400/20 rounded-2xl px-5 py-4 text-slate-200/90 text-[1.02rem]"
            >
              <strong className="text-violet-300 font-semibold">{item.title}</strong> {item.description}
            </li>
          ))}
        </ul>
        
        <p className="text-[1.05rem] text-slate-200/85">
          I believe in learning by doing, experimenting boldly, and sharing what I discover. My work is driven by curiosity, collaboration, and the desire to make something memorable.
        </p>
      </div>
    </section>
  )
}

export default About
