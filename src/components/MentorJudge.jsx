import React, { useState } from 'react'
import HackathonModal from './HackathonModal'
import ParticleBackground from './ParticleBackground'
import GastlyDoodle from './GastlyDoodle'
import hackmit25Image from '../assets/judging/hackmit25.png'
import hackmit24Image from '../assets/judging/hackmit24.png'
import cornellBRH25Image from '../assets/judging/cornell-brh25.png'
import hackharvard24Image from '../assets/judging/hackharvard24.png'
import pennapps24Image from '../assets/judging/pennapps24.png'
import columbiaDivhacks24Image from '../assets/judging/columbia-divhacks24.png'
import './MentorJudge.css'

const MentorJudge = () => {
  const [selectedHackathon, setSelectedHackathon] = useState(null)

  const hackathons = [
    {
      name: "HackMIT 2025",
      date: "September 13-14, 2025",
      description: "Weekend-long event where participants from around the globe work together to design and build innovative technology projects. One of the largest hackathons in the world at MIT's campus.",
      summary: "HackMIT is one of the world's largest and most prestigious hackathons, bringing together thousands of students from around the globe to MIT's campus. As a mentor and judge, I had the opportunity to guide teams, evaluate innovative projects, and witness cutting-edge solutions across various domains including AI, fintech, healthcare, and social impact.",
      color: '#4285f4',
      image: hackmit25Image,
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7382122419877986304/"
    },
    {
      name: "Cornell BigRed Hacks 2025",
      date: "September 19-21, 2025",
      description: "3 day long event where participants from around the globe come to Cornell & build innovative products. This is Cornell University's oldest and largest hackathon.",
      summary: "Cornell BigRed Hacks is Cornell University's premier hackathon, celebrating innovation and creativity. As a mentor and judge, I worked with teams to refine their ideas, provided technical guidance, and evaluated projects that demonstrated exceptional problem-solving and technical execution.",
      color: '#34a853',
      image: cornellBRH25Image,
      linkedinPost: "https://www.linkedin.com/posts/vishwajeet-jk_bigredhacks-cornell-innovation-activity-7392377604332306432-eMjz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACbTWv8BXX-zf9bv9z-nby7_oDbzeCHMHDw"
    },
    {
      name: "HackHarvard 2024",
      date: "October 11-13, 2024",
      description: "Weekend-long event at Harvard University, that brings together people from around the world to create innovative technology projects related to hardware, software.",
      summary: "HackHarvard brings together innovators from around the world to create cutting-edge technology projects. As a mentor and judge, I worked with teams on hardware and software solutions, provided technical mentorship, and evaluated projects that showcased exceptional creativity and technical prowess.",
      color: '#34a853',
      image: hackharvard24Image,
      linkedinPost: "https://www.linkedin.com/posts/vishwajeet-jk_harvarduniversity-hackathon-hackharvard2024-activity-7252205878609670144-77MH?utm_source=share&utm_medium=member_desktop&rcm=ACoAACbTWv8BXX-zf9bv9z-nby7_oDbzeCHMHDw"
    },
    {
      name: "PennApps XXV",
      date: "September 20-22, 2024",
      description: "3 day long event where participants from around the globe come to UPenn & build innovative products. As the world's first hackathon, PennApps celebrated its 25th Anniversary this year.",
      summary: "PennApps XXV marked a historic milestone as the world's first hackathon celebrated its 25th anniversary. As a mentor and judge, I had the honor of being part of this legacy event, working with teams to build innovative products and evaluating projects that pushed the boundaries of technology and creativity.",
      color: '#ea4335',
      image: pennapps24Image,
      linkedinPost: "https://www.linkedin.com/posts/vishwajeet-jk_pennappsxxv-pennapps-wharton-activity-7245916679535247360-xn-u?utm_source=share&utm_medium=member_desktop&rcm=ACoAACbTWv8BXX-zf9bv9z-nby7_oDbzeCHMHDw"
    },
    {
      name: "Columbia - DivHacks 2024",
      date: "October 5-6, 2024",
      description: "Weekend-long event at Columbia University where people build products. An inspirational space for historically underrepresented in the tech industry.",
      summary: "DivHacks at Columbia University creates an inclusive space for historically underrepresented groups in tech. As a mentor and judge, I supported teams in building impactful products, provided guidance on technical implementation, and evaluated projects that demonstrated innovation and social impact.",
      color: '#fbbc04',
      image: columbiaDivhacks24Image,
      linkedinPost: "https://www.linkedin.com/posts/vishwajeet-jk_classroomlm-hackathon-columbia-activity-7249139063495020544-DkUt?utm_source=share&utm_medium=member_desktop&rcm=ACoAACbTWv8BXX-zf9bv9z-nby7_oDbzeCHMHDw"
    },
    {
      name: "HackMIT 2024",
      date: "September 14-15, 2024",
      description: "Weekend-long event where participants from around the globe work together to design and build innovative technology projects. One of the largest hackathons in the world at MIT's campus.",
      summary: "HackMIT 2024 brought together brilliant minds from across the globe to tackle real-world challenges. As a mentor and judge, I evaluated projects spanning AI/ML, blockchain, IoT, and social impact, providing feedback to help teams refine their solutions and present their best work.",
      color: '#4285f4',
      image: hackmit24Image,
      linkedinPost: "https://www.linkedin.com/posts/vishwajeet-jk_hackmit-mit-judge-activity-7244338042218401793-z6pM?utm_source=share&utm_medium=member_desktop&rcm=ACoAACbTWv8BXX-zf9bv9z-nby7_oDbzeCHMHDw"
    }
  ]

  return (
    <section id="mentor-judge" className="mentor-judge">
      <ParticleBackground />
      <div className="mentor-judge-container">
        <h2 className="section-title">Mentor/Judge at Hackathons</h2>
        <p className="section-description">
          Supporting innovation and fostering talent at premier hackathons worldwide
        </p>
        <div className="hackathons-grid">
          {hackathons.map((hackathon, index) => (
            <div 
              key={index} 
              className="hackathon-card"
              onClick={() => setSelectedHackathon(hackathon)}
            >
              {hackathon.image ? (
                <div className="hackathon-image-container">
                  <img 
                    src={hackathon.image} 
                    alt={`${hackathon.name} preview`} 
                    className="hackathon-preview-image"
                  />
                </div>
              ) : (
                <div className="hackathon-image-placeholder" style={{ '--accent-color': hackathon.color }}>
                  <div className="placeholder-content">
                    <span className="placeholder-icon">🏆</span>
                    <span className="placeholder-text">{hackathon.name}</span>
                  </div>
                </div>
              )}
              <div className="hackathon-header" style={{ '--accent-color': hackathon.color }}>
                <h3 className="hackathon-name">{hackathon.name}</h3>
                <span className="hackathon-date">{hackathon.date}</span>
              </div>
              <div className="hackathon-content">
                <p className="hackathon-description">{hackathon.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GastlyDoodle />
      <HackathonModal 
        isOpen={selectedHackathon !== null}
        onClose={() => setSelectedHackathon(null)}
        hackathon={selectedHackathon}
      />
    </section>
  )
}

export default MentorJudge
