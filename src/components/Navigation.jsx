import React from 'react'
import './Navigation.css'

const Navigation = ({ sections, currentSection, onNavigate }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        {sections.map((section, index) => (
          <button
            key={section}
            className={`nav-button ${currentSection === index ? 'active' : ''}`}
            onClick={() => onNavigate(index)}
          >
            {section}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navigation


