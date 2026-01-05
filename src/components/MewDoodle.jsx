import React from 'react'
import mewGif from '../assets/mew.gif'
import './MewDoodle.css'

const MewDoodle = () => {
  return (
    <div className="mew-doodle-container">
      <img 
        src={mewGif} 
        alt="Floating mew" 
        className="mew-gif"
        onLoad={() => console.log('Mew gif loaded successfully')}
        onError={(e) => {
          console.error('Failed to load mew.gif')
          e.target.style.border = '2px solid red'
          e.target.style.backgroundColor = '#ffcccc'
        }}
      />
    </div>
  )
}

export default MewDoodle

