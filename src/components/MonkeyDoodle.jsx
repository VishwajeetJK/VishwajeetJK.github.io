import React from 'react'
import eeveeGif from '../assets/eevee.gif'
import './MonkeyDoodle.css'

const MonkeyDoodle = () => {
  return (
    <div className="monkey-doodle-container">
      <img 
        src={eeveeGif} 
        alt="Walking eevee" 
        className="monkey-gif"
        onLoad={() => console.log('Monkey gif loaded successfully')}
        onError={(e) => {
          console.error('Failed to load monkey.gif')
          e.target.style.border = '2px solid red'
          e.target.style.backgroundColor = '#ffcccc'
        }}
      />
    </div>
  )
}

export default MonkeyDoodle

