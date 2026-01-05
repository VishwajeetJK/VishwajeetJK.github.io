import React from 'react'
import doggieGif from '../assets/doggie.gif'
import './DoggieDoodle.css'

const DoggieDoodle = () => {
  return (
    <div className="doggie-doodle-container">
      <img 
        src={doggieGif} 
        alt="Walking dog" 
        className="doggie-gif"
        onLoad={() => console.log('Doggie gif loaded successfully')}
        onError={(e) => {
          console.error('Failed to load doggie.gif')
          e.target.style.border = '2px solid red'
          e.target.style.backgroundColor = '#ffcccc'
        }}
      />
    </div>
  )
}

export default DoggieDoodle

