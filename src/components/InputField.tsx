import React from 'react'

const InputField: React.FC<{ 
  gameStarted: boolean, 
  playerInput: string, 
  inputError: boolean,
  handleInput: React.FormEventHandler<HTMLInputElement>,
  inputRef: React.MutableRefObject<HTMLInputElement | null> }> = 
  ({ gameStarted, playerInput, inputError, handleInput, inputRef }) => {
  return (
    gameStarted &&
    <input type='text' value={playerInput} onChange={handleInput} ref={inputRef} className={inputError ? 'input-error' : 'input'} />
    )
}

export default InputField
