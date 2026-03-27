import { useState, useEffect } from 'react'
import { LangProvider } from './context/LangContext'
import BgOrbs from './components/BgOrbs'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

const NAV_IDS = ['about', 'experience', 'projects', 'skills', 'contact']

function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.4 }
    )
    NAV_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <BgOrbs />
      <Navbar active={activeSection} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Portfolio />
    </LangProvider>
  )
}
