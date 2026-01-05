import React from 'react'
import vishwajeetImage from '../assets/vishwajeet.png'
import CatDoodle from './CatDoodle'
import ParticleBackground from './ParticleBackground'
import './Hero.css'

const Hero = () => {
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
            <a href="#resume" className="hero-button">Resume</a>
            <a href="#cover-letter" className="hero-button">Cover Letter</a>
          </div>
        </div>
      </div>
      <CatDoodle />
    </section>
  )
}

export default Hero
