const Contact = () => {
  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'your@email.com',
      href: 'mailto:your@email.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: '@Arv2023',
      href: 'https://github.com/Arv2023',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="gradient-text">Contact Me</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 card-hover block"
            >
              <div className="text-5xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {method.label}
              </h3>
              <p className="text-purple-400">{method.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
