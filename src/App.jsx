import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Hero />
      <main className="w-[min(1100px,calc(100%-3rem))] mx-auto mb-24 grid gap-16">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
