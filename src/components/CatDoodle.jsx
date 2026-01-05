import React from 'react'
import pikachuGif from '../assets/pikachu.gif'
import './CatDoodle.css'

const CatDoodle = () => {
  return (
    <div className="cat-doodle-container">
      <img 
        src={pikachuGif} 
        alt="Walking pikachu" 
        className="doggie-gif"
        onLoad={() => console.log('Pikachu gif loaded successfully')}
        onError={(e) => {
          console.error('Failed to load pikachu.gif')
          e.target.style.border = '2px solid red'
          e.target.style.backgroundColor = '#ffcccc'
        }}
      />
    </div>
  )
}

export default CatDoodle

