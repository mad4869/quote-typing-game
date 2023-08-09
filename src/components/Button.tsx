import { useContext } from 'react'

import { GameContext } from './contexts/GameContext'
import { QuoteContext } from './contexts/QuoteContext'

const Button: React.FC<{ handleClick: () => void }> = ({ handleClick }) => {
  const game = useContext(GameContext)
  const { isLoading, error } = useContext(QuoteContext)

  const gameReady = !isLoading && !error
  const gameFinished = !game.isStarted && game.countdown === 0

  return (
    gameReady && !game.isStarted &&
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
