import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Chatbot from './Chatbot'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'work-experience', label: 'Work Experience' },
    { id: 'extracurriculars', label: 'Extracurriculars' },
    { id: 'mentor-judge', label: 'Mentor/Judge' },
    { id: 'tech-projects', label: 'Tech Projects' },
    { id: 'research', label: 'Research' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => scrollToSection('home')}>
            Vishwajeet J K
          </div>
          <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link"
                data-index={index}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="navbar-right">
            <div
              className="chatbot-diamond"
              onClick={() => setIsChatbotOpen(true)}
            >
              <span className="sqrt-x-icon">√X</span>
            </div>
            <button
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {isChatbotOpen && (
        <Chatbot onClose={() => setIsChatbotOpen(false)} />
      )}
    </>
  )
}

// Chatbot component is now imported from ./Chatbot.jsx

export default Navbar
