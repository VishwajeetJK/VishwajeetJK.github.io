import React from 'react'
import charlizardGif from '../assets/charlizard.gif'
import './PikachuDoodle.css'

const PikachuDoodle = () => {
  return (
    <div className="pikachu-doodle-container">
      <img 
        src={charlizardGif} 
        alt="Walking charlizard" 
        className="pikachu-gif"
        onLoad={() => console.log('Charlizard gif loaded successfully')}
        onError={(e) => {
          console.error('Failed to load charlizard.gif')
          e.target.style.border = '2px solid red'
          e.target.style.backgroundColor = '#ffcccc'
        }}
      />
    </div>
  )
}

export default PikachuDoodle

