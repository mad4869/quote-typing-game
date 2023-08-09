import { useContext } from 'react'

import { GameContext } from './contexts/GameContext'

const Countdown = () => {
  const game = useContext(GameContext)
  const count = game.countdown

  const safeColor = '#560bd8'
  const cautionColor = '#d38c2f'
  const dangerColor = '#d32f2f'
  const safeGradient = 'linear-gradient(90deg, rgb(100, 194, 196) 0%, rgba(85,18,153,1) 100%)'
  const cautionGradient = 'linear-gradient(90deg, rgb(234, 150, 40) 0%, rgb(234, 80, 11) 100%)'
  const dangerGradient = 'linear-gradient(90deg, rgb(234, 40, 40) 0%, rgb(202, 36, 18) 100%)'

  return (
    game.isStarted &&
    <div className='countdown'>
      <div className='countdown-bar-container'>
        <div 
          className='countdown-bar'
          style={{ 
            width: `${(count/60)*100}%`,
            background: count > 30 ? safeGradient : count > 10 ? cautionGradient : dangerGradient,
            transition: 'width 1000ms linear' }}></div>
        <div 
          className='countdown-count'
          style={{ 
            color: count > 30 ? safeColor : count > 10 ? cautionColor : dangerColor,
            transition: 'color 500ms ease-in' }}>{count}</div>
      </div>
    </div>
  )
}

export default Countdown
