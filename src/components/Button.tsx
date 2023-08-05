import React from 'react'

const Button: React.FC<{ gameFinished: boolean, handleClick: () => void }> = ({ gameFinished, handleClick }) => {
  return (
    <button onClick={handleClick} className='start'>
      {
        !gameFinished ?
        'Start' :
        'Start Over'
      }
    </button>
  )
}

export default Button
