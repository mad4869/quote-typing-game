import { useContext } from "react"

import { GameContext } from './contexts/GameContext'

const Notice = () => {
  const game = useContext(GameContext)
  
  const gameFinished = !game.isStarted && game.countdown === 0

  return (
    gameFinished &&
    <div className="notice">
      <div className="trophy"></div>
      <p>Congratulation, you have completed the game with the following result:</p>
      <p>{`${game.answeredCount} ${game.answeredCount === 1 ? 'word' : 'words'} per minute`}</p>
    </div>
  )
}

export default Notice
