import React from 'react'
import './OrganizationModal.css'

const OrganizationModal = ({ isOpen, onClose, organization }) => {
  if (!isOpen || !organization) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="organization-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-logo-container">
            {organization.logo && (
              <img 
                src={organization.logo} 
                alt={`${organization.name} logo`} 
                className="modal-logo"
              />
            )}
          </div>
          <div className="modal-title-section">
            <h2 className="modal-title">{organization.name}</h2>
            {organization.role && <p className="modal-role">{organization.role}</p>}
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          {organization.summary && (
            <div className="modal-summary">
              <h3 className="summary-title">About</h3>
              <p className="summary-text">{organization.summary}</p>
            </div>
          )}
          {organization.website && (
            <div className="modal-links">
              <a 
                href={organization.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-link"
              >
                Visit Website →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OrganizationModal

