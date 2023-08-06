import React from 'react'

const Countdown: React.FC<{ gameStarted: boolean, count: number }> = ({ gameStarted, count }) => {
  return (
    gameStarted &&
    <div className='countdown'>
      <div className='countdown-bar-container'>
        <div className={`countdown-bar ${count > 30 ? 'safe' : count > 10 ? 'caution' : 'danger'}`}></div>
      </div>
    </div>
  )
}

export default Countdown
