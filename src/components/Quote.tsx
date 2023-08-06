import React from "react"

const Quote: React.FC<{ gameStarted: boolean, content: JSX.Element[] }> = ({ gameStarted, content }) => {
  return (
    gameStarted &&
    <div className="quote">{content}</div>
  )
}

export default Quote
