import { useEffect, useReducer, useCallback, useRef, ChangeEvent } from 'react'

import { GameContext } from './GameContext'
import { QuoteContext } from './QuoteContext'
import MainText from './MainText'
import Toolbar from './Toolbar'
import useQuote from '../hooks/useQuote'
import reducer from '../utils/reducer'
import { COUNTDOWN_DURATION } from '../utils/constant'

const Content = () => {
  const { isLoading, error, data } = useQuote()

  const initialState: GameState = {
    isStarted: false,
    countdown: COUNTDOWN_DURATION,
    targetText: '',
    targetIndex: 0,
    playerInput: '',
    isInputError: false,
    answeredCount: 0
  }

  const [game, dispatch] = useReducer(reducer, initialState)

  const handleClick = () => {
    dispatch({ type: 'START_GAME', payload: randomizeText() })
  }

  const handleInput: React.FormEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_PLAYER_INPUT', payload: e.target.value })
  }

  const inputRef = useRef<HTMLInputElement | null>(null)

  const randomizeText = useCallback((prevIndex: number = 0) => {
    let index = Math.floor(Math.random() * (data?.length ?? 0))
    
    while (index === prevIndex) {
      index = Math.floor(Math.random() * (data?.length ?? 0))
    }

    return data?.[index]?.text ?? ''
  }, [data])

  useEffect(() => {
    while (game.isStarted && game.countdown > 0) {
      inputRef.current?.focus()

      const interval = setInterval(() => {
        dispatch({ type: 'COUNTING_DOWN', payload: game.countdown })
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }

    dispatch({ type: 'FINISH_GAME' })
  }, [game.isStarted, game.countdown])

  useEffect(() => {
    if (game.isStarted) {
      const targetWord = game.targetText.toLowerCase().split(' ')[game.targetIndex]
      const playerInput = game.playerInput.toLowerCase()
      const endTargetText = game.targetIndex === game.targetText.split(' ').length - 1

      if(!targetWord.startsWith(playerInput)) {
        dispatch({ type: 'MARK_INPUT_ERROR' })
      } else {
        dispatch({ type: 'CLEAR_INPUT_ERROR' })
      }

      if (targetWord === playerInput) {
        dispatch({ 
          type: 'MARK_ANSWER_CORRECT', 
          payload: {targetIndex: game.targetIndex, answeredCount: game.answeredCount} })
      }

      if (targetWord === playerInput && endTargetText) {
        dispatch({ type: 'CHANGE_TARGET_TEXT', payload: randomizeText(game.targetIndex) })
      }
    }
  }, [game.isStarted, game.targetText, game.targetIndex, game.playerInput, game.answeredCount, randomizeText])

  return (
    <main>
      <GameContext.Provider value={game}>
        <MainText />
      <QuoteContext.Provider value={{isLoading, error, data}}>
        <Toolbar handleClick={handleClick} handleInput={handleInput} inputRef={inputRef} />
      </QuoteContext.Provider>
      </GameContext.Provider>
    </main>
  )
}

export default Content
