import React, { useContext } from 'react'

import { GameContext } from './GameContext'
import { QuoteContext } from './QuoteContext'
import Button from './Button'
import Countdown from './Countdown'
import InputField from './InputField'
import Loading from "./Loading"

const Toolbar: React.FC<{ handleClick: () => void, handleInput: React.FormEventHandler<HTMLInputElement>, inputRef: React.MutableRefObject<HTMLInputElement | null> }> = ({ handleClick, handleInput, inputRef }) => {
    const { isLoading, error } = useContext(QuoteContext)
    const game = useContext(GameContext)

    return (
        <section className='toolbar'>
            {
                error && <p>{error.message}</p>
            }
            <Loading isLoading={isLoading} />
            <Button gameReady={!isLoading && !error} gameStarted={game.isStarted} gameFinished={!game.isStarted && game.countdown === 0} handleClick={handleClick} />
            <InputField gameStarted={game.isStarted} playerInput={game.playerInput} inputError={game.isInputError} handleInput={handleInput} inputRef={inputRef} />
            <Countdown gameStarted={game.isStarted} count={game.countdown} />
        </section>
    )
}

export default Toolbar
