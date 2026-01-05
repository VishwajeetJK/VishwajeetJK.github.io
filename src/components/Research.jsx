import React, { useState } from 'react'
import ParticleBackground from './ParticleBackground'
import ProjectModal from './ProjectModal'
import ivyhacksImage from '../assets/projects/ivyhacks.png'
import './Research.css'

const Research = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const researchProject = {
    name: "MediCaretaker",
    event: "IvyHacks",
    date: "Oct. 1-4, 2020",
    description: "Revolutionizing Medical Data Management with Secure Web Applications. From Hackathon Project to Research Paper, Exploring Blockchain for Electronic Healthcare Records Security and Accessibility.",
    summary: "MediCaretaker is a groundbreaking research project that started as a hackathon project at IvyHacks 2020 and evolved into a comprehensive research paper. The project revolutionizes medical data management through secure web applications, exploring the use of blockchain technology for Electronic Healthcare Records (EHR) security and accessibility. The research addresses critical challenges in healthcare data management, including patient privacy, data integrity, and secure access control. By leveraging blockchain's decentralized and immutable nature, MediCaretaker provides a robust solution for managing sensitive healthcare information while ensuring accessibility for authorized medical professionals.",
    projectLink: "https://devpost.com/software/medicaretaker",
    paperLink: "https://www.ijeat.org/wp-content/uploads/papers/v10i5/E27810610521.pdf",
    color: '#ea4335',
    image: ivyhacksImage,
    year: "2020"
  }

  return (
    <section id="research" className="research">
      <ParticleBackground />
      <div className="research-container">
        <p className="research-subtitle">MY RESEARCH PROJECT</p>
        <h2 className="research-title">RESEARCH PROJECT</h2>
        <div className="research-content">
          <div 
            className="research-card"
            onClick={() => setSelectedProject(researchProject)}
          >
            {researchProject.image ? (
              <div className="research-image-container">
                <img 
                  src={researchProject.image} 
                  alt={`${researchProject.name} preview`} 
                  className="research-preview-image"
                />
              </div>
            ) : (
              <div className="research-image-placeholder" style={{ '--accent-color': researchProject.color }}>
                <div className="placeholder-content">
                  <span className="placeholder-icon">🔬</span>
                  <span className="placeholder-text">{researchProject.name}</span>
                </div>
              </div>
            )}
            <div className="research-header" style={{ '--accent-color': researchProject.color }}>
              <div className="research-event-badge">
                <span className="event-name">{researchProject.event}</span>
                <span className="event-date">{researchProject.date}</span>
              </div>
              <h3 className="research-project-name">{researchProject.name}</h3>
            </div>
            <div className="research-description">
              <p>{researchProject.description}</p>
            </div>
          </div>
        </div>
      </div>
      <ProjectModal 
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  )
}

export default Research
