import React from 'react'
import lugiaGif from '../assets/lugia.gif'
import './LugiaDoodle.css'

const LugiaDoodle = () => {
  return (
    <div className="lugia-doodle-container">
      <img 
        src={lugiaGif} 
        alt="Flying lugia" 
        className="lugia-gif"
        onLoad={() => console.log('Lugia gif loaded successfully')}
        onError={(e) => {
          console.error('Failed to load lugia.gif')
          e.target.style.border = '2px solid red'
          e.target.style.backgroundColor = '#ffcccc'
        }}
      />
    </div>
  )
}

export default LugiaDoodle

