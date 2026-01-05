import React from 'react'
import cbsLogo from '../assets/cbs.webp'
import columbiaEngineeringLogo from '../assets/columbia_engineering.webp'
import vitLogo from '../assets/vit.png'
import dpsLogo from '../assets/dps.png'
import ParticleBackground from './ParticleBackground'
import PikachuDoodle from './PikachuDoodle'
import './Education.css'

const Education = () => {
  const education = [
    {
      institution: 'Columbia Business School',
      location: 'NYC, USA',
      degree: 'MS in Management Science & Engineering',
      logo: cbsLogo,
      logoAlt: 'Columbia Business School',
      link: 'https://academics.business.columbia.edu/ms#:~:text=Learn%20more-,MS%26E,-The%20Management%20Science'
    },
    {
      institution: 'Columbia Engineering',
      location: 'NYC, USA',
      degree: 'MS in Management Science & Engineering',
      logo: columbiaEngineeringLogo,
      logoAlt: 'Columbia Engineering',
      link: 'https://ieor.columbia.edu/management-science-and-engineering-mse'
    },
    {
      institution: 'Vellore Institute of Technology',
      location: 'Vellore, India',
      degree: 'B.Tech in Computer Science & Engineering',
      logo: vitLogo,
      logoAlt: 'VIT',
      link: 'https://vit.ac.in/schools/school-of-computer-science-and-engineering'
    },
    {
      institution: 'Delhi Public School',
      location: 'Navi Mumbai, India',
      degree: 'Kindergarten, Primary, Middle & High School',
      logo: dpsLogo,
      logoAlt: 'DPS Navi Mumbai',
      link: 'https://dpsnavimumbai.edu.in/'
    }
  ]

  return (
    <section id="education" className="education">
      <ParticleBackground />
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => {
            const CardWrapper = edu.link ? 'a' : 'div'
            const wrapperProps = edu.link ? {
              href: edu.link,
              target: '_blank',
              rel: 'noopener noreferrer'
            } : {}
            
            return (
              <CardWrapper 
                key={index} 
                className={`education-card ${edu.link ? 'education-card-link' : ''}`}
                {...wrapperProps}
              >
                {edu.logo && (
                  <div className="education-logo">
                    <img 
                      src={edu.logo} 
                      alt={edu.logoAlt}
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
                <div className="education-details">
                  <h3 className="institution-name">
                    {edu.institution}
                    {edu.location && <span className="location">, {edu.location}</span>}
                  </h3>
                  <p className="degree">{edu.degree}</p>
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </div>
      <PikachuDoodle />
    </section>
  )
}

export default Education
