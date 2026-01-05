import React from 'react'
import ParticleBackground from './ParticleBackground'
import FlareonDoodle from './FlareonDoodle'
import vishwajeetContactImage from '../assets/vishwajeet-contact.png'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <ParticleBackground />
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-image-wrapper">
            <img 
              src={vishwajeetContactImage} 
              alt="Vishwajeet J K" 
              className="contact-image"
            />
          </div>
          <div className="contact-right-content">
            <div className="contact-text-content">
              <p className="contact-subtitle">– MY CONTACT</p>
              <h2 className="contact-title">LET'S CONNECT AND COLLABORATE</h2>
              <p className="contact-description">
                Reach out to discuss collaborations or opportunities.
                Let's innovate together! Contact me via email or
                LinkedIn. Looking forward to connecting.
              </p>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div className="contact-details">
                  <a href="mailto:vishwajeetkarthikeyan@gmail.com" className="contact-link">
                    vishwajeetkarthikeyan@gmail.com
                  </a>
                  <a href="mailto:vj2287@columbia.edu" className="contact-link">
                    vj2287@columbia.edu
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <p className="contact-text">
                    COLUMBIA BUSINESS SCHOOL,<br />
                    560 W 126TH ST, NEW YORK, NY 10027, USA
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-details">
                  <a 
                    href="https://linkedin.com/in/vishwajeet-jk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    LINKEDIN/VISHWAJEET-JK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FlareonDoodle />
        <div className="copyright">
          <p>© {new Date().getFullYear()} Vishwajeet Jayanti Karthikeyan</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
