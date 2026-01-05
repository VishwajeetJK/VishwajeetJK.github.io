import React from 'react'
import './PDFModal.css'

const PDFModal = ({ isOpen, onClose, pdfUrl, title }) => {
  if (!isOpen || !pdfUrl) return null

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = title || 'document.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <h2 className="pdf-modal-title">{title || 'Document'}</h2>
          <div className="pdf-modal-actions">
            <button 
              className="pdf-download-button"
              onClick={handleDownload}
            >
              Download PDF
            </button>
            <button className="pdf-modal-close" onClick={onClose}>×</button>
          </div>
        </div>
        <div className="pdf-modal-body">
          <iframe
            src={pdfUrl}
            className="pdf-iframe"
            title={title || 'PDF Document'}
          />
        </div>
      </div>
    </div>
  )
}

export default PDFModal

