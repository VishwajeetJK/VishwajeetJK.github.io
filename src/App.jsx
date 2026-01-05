import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Extracurriculars from './components/Extracurriculars'
import MentorJudge from './components/MentorJudge'
import TechProjects from './components/TechProjects'
import Research from './components/Research'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <WorkExperience />
      <Extracurriculars />
      <MentorJudge />
      <TechProjects />
      <Research />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App
