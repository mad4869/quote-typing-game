import React from "react"

const Quote: React.FC<{ gameStarted: boolean, content: JSX.Element[] }> = ({ gameStarted, content }) => {
  return (
    gameStarted &&
    <div className="quote-container">
      <div className="quotation-mark"><p>“”</p></div>
      <div className="quote">{content}</div>
    </div>
  )
}

export default Quote
