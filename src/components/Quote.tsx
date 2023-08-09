import { useContext } from "react"

import { GameContext } from './contexts/GameContext'
import useRenderText from '../hooks/useRenderText'

const Quote = () => {
  const game = useContext(GameContext)
  const renderedText = useRenderText(game)

  return (
    game.isStarted &&
    <div className="quote-container">
      <div className="quotation-mark"><p>“”</p></div>
      <div className="quote">{renderedText}</div>
    </div>
  )
}

export default Quote
