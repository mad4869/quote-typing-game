import React from 'react'

const InputField: React.FC<{ 
  gameStarted: boolean, 
  playerInput: string, 
  handleInput: React.FormEventHandler<HTMLInputElement>,
  inputRef: React.MutableRefObject<HTMLInputElement | null> }> = 
  ({ gameStarted, playerInput, handleInput, inputRef }) => {
  return (
    gameStarted &&
    <input type='text' value={playerInput} onChange={handleInput} ref={inputRef} />
    )
}

export default InputField
