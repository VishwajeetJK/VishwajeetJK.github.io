import React, { useState, useEffect } from 'react'
import './Navbar.css'

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

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm here to help. How can I assist you today?", sender: 'bot' }
  ])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const handleSend = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = { text: inputValue, sender: 'user' }
    setMessages([...messages, userMessage])
    setInputValue('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = { 
        text: "Thanks for your message! I'll get back to you soon. Feel free to ask me anything about Vishwajeet's work or experience.", 
        sender: 'bot' 
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="chatbot-content" onClick={(e) => e.stopPropagation()}>
        <div className="chatbot-header">
          <div className="chatbot-title">
            <span className="sqrt-x-icon-small">√X</span>
            <h2>Chat Assistant</h2>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chatbot-message ${msg.sender}`}>
              <div className="message-bubble">
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <form className="chatbot-input-form" onSubmit={handleSend}>
          <input
            type="text"
            className="chatbot-input"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="chatbot-send">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Navbar
