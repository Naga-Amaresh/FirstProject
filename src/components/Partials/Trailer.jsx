import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PageNotFound from '../PageNotFound'

const Trailer = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation();
    const category  = pathname.includes('movie')?"movie":"tv";
    const ytvidoes = useSelector(state => state[category].info.videos);
    // console.log(pathname, ytvidoes)
  return  (
    <div style={{
        backgroundColor: "rgba(0,0,0,0.9)",
    }} className='fixed h-screen w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:-translate-x-0 sm:-translate-y-0 sm:top-0 sm:left-0 sm:z-[99] sm:h-screen sm:w-full flex items-center justify-center'>

        {ytvidoes ? (<span className='sm:h-[90vh] sm:min-w-[80vw] '><ReactPlayer  height={"100%"} width={"100%"} url={`https://www.youtube.com/watch?v=${ytvidoes.key}`} /></span>):<PageNotFound/>}
        <Link onClick={()=>navigate(-1)}><i className="top-1/3  absolute sm:top-10 sm:right-20 sm:text-2xl sm:text-red-600 ri-close-large-fill"></i></Link>
    </div>
  )
}

export default Trailer