import { useContext } from 'react'
import ReactLoading from 'react-loading'

import { QuoteContext } from './contexts/QuoteContext'

const Loading = () => {
  const { isLoading } = useContext(QuoteContext)

  return (
    isLoading &&
    <div className='loading-container'>
      <ReactLoading type='spin' color='rgb(86, 11, 216)' />
      <p className='loading-text'>Please wait...</p>
    </div>
  )
}

export default Loading
