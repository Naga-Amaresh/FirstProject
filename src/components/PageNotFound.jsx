import React from 'react'
import Page from '../../public/Page.gif';

const PageNotFound = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center bg-black'>
            <img className='h-[50%] object-cover' src={Page} alt="" />
        </div>
      )
}

export default PageNotFound