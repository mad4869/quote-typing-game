import ReactLoading from 'react-loading'

const Loading = () => {
  return (
    <div className='loading-container'>
      <ReactLoading type='spin' color='dodgerblue' />
      <p className='loading-text'>Please wait...</p>
    </div>
  )
}

export default Loading
