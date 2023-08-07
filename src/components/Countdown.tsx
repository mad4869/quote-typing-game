import React from 'react'

const Countdown: React.FC<{ gameStarted: boolean, count: number }> = ({ gameStarted, count }) => {
  const safeGradient = 'linear-gradient(90deg, rgb(100, 194, 196) 0%, rgba(85,18,153,1) 100%)'
  const cautionGradient = 'linear-gradient(90deg, rgb(234, 150, 40) 0%, rgb(234, 80, 11) 100%)'
  const dangerGradient = 'linear-gradient(90deg, rgb(234, 40, 40) 0%, rgb(202, 36, 18) 100%)'

  return (
    gameStarted &&
    <div className='countdown'>
      <div className='countdown-bar-container'>
        <div 
          className={`countdown-bar`}
          style={{ 
            width: `${(count/60)*100}%`,
            background: count > 30 ? safeGradient : count > 10 ? cautionGradient : dangerGradient,
            transition: 'width 1000ms linear' }}></div>
        <div className='countdown-count'>{count}</div>
      </div>
    </div>
  )
}

export default Countdown
