import React from 'react'
import CatDoodle from './CatDoodle'
import './About.css'

const About = () => {
  return (
    <>
      <CatDoodle />
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-content">
            <h2 className="section-title">About</h2>
            <div className="about-text">
              <p>
                With a decade of experience in product management and development, 
                I specialize in building innovative solutions in Fintech and Proptech. 
                My approach combines technical expertise with creative problem-solving, 
                enabling me to deliver products that make a meaningful impact.
              </p>
              <p>
                Beyond my professional work, I've dedicated over ten years to volunteering, 
                which has strengthened my ability to understand diverse perspectives and 
                create solutions that truly serve communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
