import { useContext } from 'react'

import { GameContext } from './contexts/GameContext'

const InputField: React.FC<{ 
  handleInput: React.FormEventHandler<HTMLInputElement>, 
  inputRef: React.MutableRefObject<HTMLInputElement | null> 
}> = 
  ({ handleInput, inputRef }) => {
    const game = useContext(GameContext)

    return (
      game.isStarted &&
      <input type='text' value={game.playerInput} onChange={handleInput} ref={inputRef} 
      className={game.isInputError ? 'input-error' : 'input'} />
      )
}

export default InputField
