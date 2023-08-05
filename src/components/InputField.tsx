import React from 'react'

const InputField: React.FC<{ playerInput: string, handleInput: () => void }> = ({ playerInput, handleInput }) => {
  return <input type='text' value={playerInput} onChange={handleInput} />
}

export default InputField
