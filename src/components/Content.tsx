import { useEffect, useReducer, useCallback, useRef, ChangeEvent } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

import Quote from "./Quote"
import Button from './Button'
import Countdown from './Countdown'
import InputField from './InputField'
import Highlighted from './Highlighted'
import Loading from "./Loading"
import Notice from './Notice'

const Content = () => {
  const fetchData = async ():Promise<Quote[]> => {
    const { data } = await axios.get('https://type.fit/api/quotes')
    return data
  }

  const { isLoading, error, data } = useQuery<Quote[], Error>({
    queryKey: ['Quote'],
    queryFn: fetchData,
    staleTime: 60000,
    refetchOnMount: false
  })

  const initialState: GameState = {
    isStarted: false,
    countdown: 60,
    targetText: '',
    targetIndex: 0,
    playerInput: '',
    isInputError: false,
    answeredCount: 0
  }

  const reducer = (state: GameState, action: Action) => {
    switch (action.type) {
      case 'START_GAME':
        return {
          ...state,
          isStarted: true,
          countdown: 60,
          targetText: action.payload as string,
          targetIndex: 0,
          playerInput: '',
          isInputError: false,
          answeredCount: 0
        }
      case 'FINISH_GAME':
        return {
          ...state,
          isStarted: false
        }
      case 'COUNTING_DOWN':
        return {
          ...state,
          countdown: (action.payload as number) - 1
        }
      case 'SET_PLAYER_INPUT':
        return {
          ...state,
          playerInput: action.payload as string
        }
      case 'MARK_ANSWER_CORRECT':
        return {
          ...state,
          targetIndex: (action.payload as { targetIndex: number }).targetIndex + 1,
          playerInput: '',
          answeredCount:(action.payload as { answeredCount: number }).answeredCount + 1
        }
      case 'CHANGE_TARGET_TEXT':
        return {
          ...state,
          targetText: action.payload as string,
          targetIndex: 0
        }
      case 'MARK_INPUT_ERROR':
        return {
          ...state,
          isInputError: true,
        }
      case 'CLEAR_INPUT_ERROR':
        return {
          ...state,
          isInputError: false
        }
      default:
        return state
    }
  }

  const [game, dispatch] = useReducer(reducer, initialState)

  const randomizeText = useCallback((prevIndex: number = 0) => {
    let index = Math.floor(Math.random() * (data?.length ?? 0))
    
    while (index === prevIndex) {
      index = Math.floor(Math.random() * (data?.length ?? 0))
    }

    return data?.[index]?.text ?? ''
  }, [data])

  const renderText = () => {
    const text = game.targetText.split(' ')
    return text.map((word: string, index: number) => {
      return (
        index === game.targetIndex ?
        <Highlighted key={index}>{word}{index !== text.length - 1 ? ' ' : ''}</Highlighted> :
        <span key={index}>{word}{index !== text.length - 1 ? ' ' : ''}</span>
      )
    })
  }

  const handleClick = () => {
    dispatch({ type: 'START_GAME', payload: randomizeText() })
  }

  const handleInput: React.FormEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_PLAYER_INPUT', payload: e.target.value })
  }

  const inputRef = useRef<HTMLInputElement | null>(null)

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
      <section className="quote-container">
        <Quote gameStarted={game.isStarted} content={renderText()} />
        <Notice gameFinished={!game.isStarted && game.countdown === 0} answeredCount={game.answeredCount} />
      </section>
      <section className='toolbar'>
        {
          error && <p>{error.message}</p>
        }
        <Loading isLoading={isLoading} />
        <Button gameReady={!isLoading && !error} gameStarted={game.isStarted} gameFinished={!game.isStarted && game.countdown === 0} handleClick={handleClick} />
        <InputField gameStarted={game.isStarted} playerInput={game.playerInput} inputError={game.isInputError} handleInput={handleInput} inputRef={inputRef} />
        <Countdown gameStarted={game.isStarted} count={game.countdown} />
      </section>
    </main>
  )
}

export default Content
