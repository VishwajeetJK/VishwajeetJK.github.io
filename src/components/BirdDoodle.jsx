import React from 'react'
import pikachuGif from '../assets/pikachu.gif'
import './BirdDoodle.css'

const BirdDoodle = () => {
  return (
    <div className="bird-doodle-container">
      <img 
        src={pikachuGif} 
        alt="Walking pikachu" 
        className="bird-gif"
        onLoad={() => console.log('Bird gif loaded successfully')}
        onError={(e) => {
          console.error('Failed to load bird.gif')
          e.target.style.border = '2px solid red'
          e.target.style.backgroundColor = '#ffcccc'
        }}
      />
    </div>
  )
}

export default BirdDoodle

