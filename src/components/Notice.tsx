import React from "react"

const Notice: React.FC<{ answeredCount: number }> = ({ answeredCount }) => {
  return (
    <div>
      <p>Congratulation, you have completed the game with the following result:</p>
      <p>{`${answeredCount} ${answeredCount === 1 ? 'word' : 'words'} per minute`}</p>
    </div>
  )
}

export default Notice
