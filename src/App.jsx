// src/App.jsx
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Certifications />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
