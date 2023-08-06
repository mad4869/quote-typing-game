import React from "react"

const Notice: React.FC<{ gameFinished: boolean, answeredCount: number }> = ({ gameFinished, answeredCount }) => {
  return (
    gameFinished &&
    <div className="notice">
      <div className="trophy"></div>
      <p>Congratulation, you have completed the game with the following result:</p>
      <p>{`${answeredCount} ${answeredCount === 1 ? 'word' : 'words'} per minute`}</p>
    </div>
  )
}

export default Notice
