import React, { useState } from 'react'
import vishwajeetImage from '../assets/vishwajeet.png'
import resumePdf from '../assets/Vishwajeet 2026 Resume.pdf'
import coverLetterPdf from '../assets/Vishwajeet 2026 Cover Letter.pdf'
import CatDoodle from './CatDoodle'
import ParticleBackground from './ParticleBackground'
import PDFModal from './PDFModal'
import './Hero.css'

const Hero = () => {
  const [selectedPdf, setSelectedPdf] = useState(null)
  const [pdfTitle, setPdfTitle] = useState('')

  const handleResumeClick = (e) => {
    e.preventDefault()
    setPdfTitle('Vishwajeet 2026 Resume')
    setSelectedPdf(resumePdf)
  }

  const handleCoverLetterClick = (e) => {
    e.preventDefault()
    setPdfTitle('Vishwajeet 2026 Cover Letter')
    setSelectedPdf(coverLetterPdf)
  }

  return (
    <section id="home" className="hero">
      <ParticleBackground />
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img 
            src={vishwajeetImage} 
            alt="Vishwajeet J K" 
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <p className="hero-greeting">- HEY THERE</p>
          <h1 className="hero-name">I'M VISHWAJEET J K</h1>
          <p className="hero-description">
            Product manager and developer with deep expertise in Fintech & Proptech. 
            I bridge engineering and creativity to deliver innovative solutions. 
            A decade of volunteering has sharpened my ability to connect with people 
            and create meaningful impact.
          </p>
          <div className="hero-buttons">
            <a href="#" className="hero-button" onClick={handleResumeClick}>Resume</a>
            <a href="#" className="hero-button" onClick={handleCoverLetterClick}>Cover Letter</a>
          </div>
        </div>
      </div>
      <CatDoodle />
      <PDFModal 
        isOpen={selectedPdf !== null}
        onClose={() => setSelectedPdf(null)}
        pdfUrl={selectedPdf}
        title={pdfTitle}
      />
    </section>
  )
}

export default Hero
