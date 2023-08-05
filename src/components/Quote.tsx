import React from "react"

const Quote: React.FC<{ content: string }> = ({ content }) => {
  return <h1 className="quote">{content}</h1>
}

export default Quote
