import React, { useState } from 'react'
import ParticleBackground from './ParticleBackground'
import gallery1 from '../assets/gallery/1.png'
import gallery2 from '../assets/gallery/2.png'
import gallery3 from '../assets/gallery/3.png'
import gallery4 from '../assets/gallery/4.png'
import gallery5 from '../assets/gallery/5.png'
import gallery6 from '../assets/gallery/6.png'
import gallery7 from '../assets/gallery/7.png'
import gallery8 from '../assets/gallery/8.png'
import gallery9 from '../assets/gallery/9.png'
import gallery10 from '../assets/gallery/10.png'
import gallery11 from '../assets/gallery/11.png'
import gallery12 from '../assets/gallery/12.png'
import gallery13 from '../assets/gallery/13.png'
import gallery14 from '../assets/gallery/14.png'
import gallery15 from '../assets/gallery/15.png'
import gallery16 from '../assets/gallery/16.png'
import gallery17 from '../assets/gallery/17.png'
import gallery18 from '../assets/gallery/18.png'
import gallery19 from '../assets/gallery/19.png'
import gallery20 from '../assets/gallery/20.png'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Reordered for better visual flow in collage
  const images = [
    gallery1, gallery3, gallery7, gallery12, gallery15,
    gallery2, gallery5, gallery9, gallery14, gallery18,
    gallery4, gallery6, gallery10, gallery16, gallery20,
    gallery8, gallery11, gallery13, gallery17, gallery19
  ]

  // Google colors for frames
  const frameColors = [
    '#4285f4', '#ea4335', '#fbbc04', '#34a853',
    '#4285f4', '#ea4335', '#fbbc04', '#34a853',
    '#4285f4', '#ea4335', '#fbbc04', '#34a853',
    '#4285f4', '#ea4335', '#fbbc04', '#34a853',
    '#4285f4', '#ea4335', '#fbbc04', '#34a853'
  ]

  return (
    <section id="gallery" className="gallery">
      <ParticleBackground />
      <div className="gallery-container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-description">
          Visual showcase of work and experiences
        </p>
        <div className="gallery-collage">
          {images.map((image, index) => {
            const isImage10 = image === gallery10
            const isImage11 = image === gallery11
            const isImage12 = image === gallery12
            const isImage13 = image === gallery13
            const isImage16 = image === gallery16
            
            return (
              <div
                key={index}
                className={`gallery-frame ${isImage10 ? 'gallery-frame-small' : ''} ${isImage11 || isImage12 || isImage13 || isImage16 ? 'gallery-frame-large' : ''}`}
                style={{ '--frame-color': frameColors[index] }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="frame-border"></div>
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="frame-overlay">
                  <span className="frame-number">{index + 1}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {selectedImage && (
        <div 
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Full size gallery image"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery


