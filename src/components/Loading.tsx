import React from 'react'
import ReactLoading from 'react-loading'

const Loading: React.FC<{isLoading: boolean}> = ({ isLoading }) => {
  return (
    isLoading &&
    <div className='loading-container'>
      <ReactLoading type='spin' color='rgb(86, 11, 216)' />
      <p className='loading-text'>Please wait...</p>
    </div>
  )
}

export default Loading
