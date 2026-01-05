import React, { useState } from 'react'
import ParticleBackground from './ParticleBackground'
import ProjectModal from './ProjectModal'
import MewDoodle from './MewDoodle'
import tuskcpaImage from '../assets/projects/tuskcpa-ycw26.png'
import growwhackraft23Image from '../assets/projects/growwhackraft23.png'
import growwhackraft22Image from '../assets/projects/growwhackraft22.png'
import hackmit20Image from '../assets/projects/hackmit20.png'
import nasaspacehacks20Image from '../assets/projects/nasaspacehacks20.png'
import './TechProjects.css'

const TechProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      name: "TuskCPA",
      year: "2024-2025",
      description: "AI-powered accounting automation software that automates hundreds of client tasks. Transform accounting practices with intelligent workflows that integrate seamlessly with QuickBooks, Intuit, Xero, and other accounting tools.",
      summary: "TuskCPA is an AI-powered accounting automation platform designed to revolutionize accounting practices by automating hundreds of client tasks. The platform handles complex tax returns, audits, and financial reports with intelligent workflows that integrate seamlessly with QuickBooks, Intuit, Xero, and other accounting tools. Built by founders with experience from the Bill & Melinda Gates Foundation, Times of India, Columbia Business School, IEOR, and LVMH, TuskCPA combines cutting-edge AI technology with deep accounting expertise to streamline operations and enhance productivity for accounting firms.",
      color: '#ea4335',
      image: tuskcpaImage,
      link: null
    },
    {
      name: "Capital Shield AI",
      year: "2023",
      description: "Revolutionizing Risk Management in FnO Trading with AI-Enabled Smart Exit Feature. Safeguarding Users from Losses by Recommending and Executing Protective Measures.",
      summary: "Capital Shield AI is an innovative fintech solution designed to revolutionize risk management in Futures and Options (FnO) trading. The platform uses advanced AI algorithms to analyze market conditions and user portfolios in real-time, providing smart exit recommendations and automatically executing protective measures to safeguard traders from significant losses. The system combines machine learning with financial expertise to create a comprehensive risk management ecosystem.",
      color: '#4285f4',
      image: growwhackraft23Image,
      link: "https://www.linkedin.com/in/vishwajeet-jk/overlay/experience/1982555559/multiple-media-viewer/?profileId=ACoAACbTWv8BXX-zf9bv9z-nby7_oDbzeCHMHDw&treasuryMediaId=1635551698297"
    },
    {
      name: "GrowwWise",
      year: "2022",
      description: "Empowering Finfluencers with Groww Academy – A Custom Learning Ecosystem. Featuring Interactive Games and Engaging Dashboards for Enhanced User Experience and Knowledge Retention.",
      summary: "GrowwWise is a comprehensive learning platform developed for Groww Academy, designed to empower financial influencers (finfluencers) with the knowledge and tools they need to educate their audiences. The platform features interactive games, engaging dashboards, and personalized learning paths that enhance user experience and improve knowledge retention. It combines gamification with financial education to create an immersive learning ecosystem.",
      color: '#34a853',
      image: growwhackraft22Image,
      link: "https://www.linkedin.com/in/vishwajeet-jk/overlay/experience/1982555559/multiple-media-viewer/?profileId=ACoAACbTWv8BXX-zf9bv9z-nby7_oDbzeCHMHDw&treasuryMediaId=1635551693991"
    },
    {
      name: "AssistMe @HackMIT",
      year: "2020",
      description: "Empowering Accessibility for Physically Challenged Individuals in the Digital Sphere. A Comprehensive Hardware and Software Solution Facilitating Seamless Integration into the Digital World.",
      summary: "AssistMe is an innovative accessibility solution developed at HackMIT 2020, designed to empower physically challenged individuals in the digital world. The project combines hardware and software components to create a comprehensive solution that facilitates seamless integration into digital environments. It addresses various accessibility challenges through assistive technologies, making digital interactions more inclusive and user-friendly for people with physical disabilities.",
      color: '#ea4335',
      image: hackmit20Image,
      link: "https://www.linkedin.com/in/vishwajeet-jk/details/projects/"
    },
    {
      name: "Zodiac @NasaSpaceApps",
      year: "2020",
      description: "Your Ultimate Earth Science Companion. Explore Fascinating Insights from Past Projects, Dive into Current Studies, and Shape Tomorrow with an Immersive 3D Game Experience.",
      summary: "Zodiac is an educational platform developed for NASA Space Apps Challenge, serving as an ultimate Earth science companion. The application allows users to explore fascinating insights from past NASA projects, dive into current studies, and shape tomorrow through an immersive 3D game experience. It combines scientific data visualization with interactive gaming elements to make Earth science education engaging and accessible.",
      color: '#fbbc04',
      image: nasaspacehacks20Image,
      link: "https://2020.spaceappschallenge.org/challenges/inform/mission-planet-earth-digital-history/teams/team-zodiac/project/"
    }
  ]

  return (
    <section id="tech-projects" className="tech-projects">
      <ParticleBackground />
      <div className="tech-projects-container">
        <p className="projects-subtitle">MY TECH PROJECTS</p>
        <h2 className="projects-title">TECH PROJECTS</h2>
        <p className="section-description">
          Innovative technology projects spanning AI, fintech, accessibility, and space science
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              {project.image ? (
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={`${project.name} preview`} 
                    className="project-preview-image"
                  />
                </div>
              ) : (
                <div className="project-image-placeholder" style={{ '--accent-color': project.color }}>
                  <div className="placeholder-content">
                    <span className="placeholder-icon">💻</span>
                    <span className="placeholder-text">{project.name}</span>
                  </div>
                </div>
              )}
              <div className="project-header" style={{ '--accent-color': project.color }}>
                <h3 className="project-name">{project.name}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <div className="project-content">
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
          <a 
            href="https://github.com/VishwajeetJK" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-card github-project-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="project-image-placeholder github-placeholder" style={{ '--accent-color': '#4285f4' }}>
              <div className="placeholder-content">
                <span className="placeholder-icon">🐙</span>
                <span className="placeholder-text">GitHub</span>
              </div>
            </div>
            <div className="project-header" style={{ '--accent-color': '#4285f4' }}>
              <h3 className="project-name">Go to Github for more projects</h3>
              <span className="project-year">→</span>
            </div>
            <div className="project-content">
              <p className="project-description">Explore more of my open-source projects, contributions, and code repositories on GitHub.</p>
            </div>
          </a>
        </div>
      </div>
      <MewDoodle />
      <ProjectModal 
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  )
}

export default TechProjects
