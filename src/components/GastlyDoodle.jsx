import React from 'react'
import gastlyGif from '../assets/gastly.gif'
import './GastlyDoodle.css'

const GastlyDoodle = () => {
  return (
    <div className="gastly-doodle-container">
      <img 
        src={gastlyGif} 
        alt="Floating gastly" 
        className="gastly-gif"
        onLoad={() => console.log('Gastly gif loaded successfully')}
        onError={(e) => {
          console.error('Failed to load gastly.gif')
          e.target.style.border = '2px solid red'
          e.target.style.backgroundColor = '#ffcccc'
        }}
      />
    </div>
  )
}

export default GastlyDoodle

