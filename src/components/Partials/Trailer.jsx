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
    }} className='fixed top-0 left-0 z-[99] h-screen w-full flex items-center justify-center'>

        {ytvidoes ? (<ReactPlayer controls height={600} width={1200} url={`https://www.youtube.com/watch?v=${ytvidoes.key}`} />):<PageNotFound/>}
        <Link onClick={()=>navigate(-1)}><i className="absolute top-10 right-20 text-2xl text-red-600 ri-close-large-fill"></i></Link>
    </div>
  )
}

export default Trailer