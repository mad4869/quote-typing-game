import React from 'react'

const Button: React.FC<{ gameReady: boolean, gameStarted: boolean, gameFinished: boolean, handleClick: () => void }> = ({ gameReady, gameStarted, gameFinished, handleClick }) => {
  return (
    gameReady && !gameStarted &&
    <button onClick={handleClick} className='start' title='Start typing!'>
      {
        !gameFinished ?
        'Start' :
        'Start Over'
      }
    </button>
  )
}

export default Button
