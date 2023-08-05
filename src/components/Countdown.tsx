import React from 'react'

const Countdown: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className={`countdown 
    ${count > 30 ? 'safe' 
    : count > 10 ? 'caution' 
    : 'danger'}`}>
      {count}
    </div>
  )
}

export default Countdown
