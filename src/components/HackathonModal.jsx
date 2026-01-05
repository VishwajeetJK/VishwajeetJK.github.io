import React from 'react'
import './HackathonModal.css'

const HackathonModal = ({ isOpen, onClose, hackathon }) => {
  if (!isOpen || !hackathon) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="hackathon-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-section">
            <h2 className="modal-title">{hackathon.name}</h2>
            <p className="modal-date">{hackathon.date}</p>
          </div>
          <div className="modal-header-actions">
            {hackathon.linkedinPost && (
              <a 
                href={hackathon.linkedinPost} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-link-header"
              >
                Learn More →
              </a>
            )}
            <button className="modal-close" onClick={onClose}>×</button>
          </div>
        </div>
        {hackathon.image && (
          <div className="modal-image-container">
            <img 
              src={hackathon.image} 
              alt={`${hackathon.name} preview`} 
              className="modal-preview-image"
            />
          </div>
        )}
        <div className="modal-body">
          {hackathon.summary && (
            <div className="modal-summary">
              <h3 className="summary-title">About</h3>
              <p className="summary-text">{hackathon.summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HackathonModal

