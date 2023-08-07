import { useContext } from 'react'

import Quote from "./Quote"
import Notice from './Notice'
import { GameContext } from './GameContext'
import useRenderText from '../hooks/useRenderText'

const MainText = () => {
    const game = useContext(GameContext)

    return (
        <section className="text-container">
            <Quote gameStarted={game.isStarted} content={useRenderText(game)} />
            <Notice gameFinished={!game.isStarted && game.countdown === 0} answeredCount={game.answeredCount} />
        </section>
    )
}

export default MainText
