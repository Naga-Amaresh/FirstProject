import React from 'react'
import loading from '../../public/loading.gif';

const Loading = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-black'>
        <img className='h-32' src={loading} alt="" />
    </div>
  )
}

export default Loading