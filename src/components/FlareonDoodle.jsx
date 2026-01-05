import React from 'react'
import flareonGif from '../assets/flareon.gif'
import './FlareonDoodle.css'

const FlareonDoodle = () => {
  return (
    <div className="flareon-doodle-container">
      <img 
        src={flareonGif} 
        alt="Walking flareon" 
        className="flareon-gif"
        onLoad={() => console.log('Flareon gif loaded successfully')}
        onError={(e) => {
          console.error('Failed to load flareon.gif')
          e.target.style.border = '2px solid red'
          e.target.style.backgroundColor = '#ffcccc'
        }}
      />
    </div>
  )
}

export default FlareonDoodle

