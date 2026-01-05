import React from 'react'
import './ProjectModal.css'

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-section">
            <h2 className="modal-title">{project.name}</h2>
            {project.year && <p className="modal-year">{project.year}</p>}
            {project.date && <p className="modal-year">{project.date}</p>}
            {project.event && <p className="modal-year">{project.event}</p>}
          </div>
          <div className="modal-header-actions">
            {project.projectLink && (
              <a 
                href={project.projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-link-header"
              >
                View Execution →
              </a>
            )}
            {project.paperLink && (
              <a 
                href={project.paperLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-link-header"
              >
                View Research Paper →
              </a>
            )}
            <button className="modal-close" onClick={onClose}>×</button>
          </div>
        </div>
        {project.image && (
          <div className="modal-image-container">
            <img 
              src={project.image} 
              alt={`${project.name} preview`} 
              className="modal-preview-image"
            />
          </div>
        )}
        <div className="modal-body">
          {project.summary && (
            <div className="modal-summary">
              <h3 className="summary-title">About</h3>
              <p className="summary-text">{project.summary}</p>
            </div>
          )}
          {project.description && !project.summary && (
            <div className="modal-summary">
              <h3 className="summary-title">Description</h3>
              <p className="summary-text">{project.description}</p>
            </div>
          )}
          {project.link && (
            <div className="modal-links">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-link"
              >
                View Project →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

