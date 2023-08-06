import React from "react"

const Quote: React.FC<{ gameStarted: boolean, content: string }> = ({ gameStarted, content }) => {
  return (
    gameStarted &&
    <h1 className="quote">{content}</h1>
  )
}

export default Quote
