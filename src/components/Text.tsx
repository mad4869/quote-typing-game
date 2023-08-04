import React from "react"

const Text: React.FC<{ content: string }> = ({ content }) => {
  return <h1 className="target-text">{content}</h1>
}

export default Text
