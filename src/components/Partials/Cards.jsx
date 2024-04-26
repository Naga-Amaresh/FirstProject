import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data ,title}) => {
    console.log(title)
  return (
    <div className=' text-white flex gap-10 flex-wrap py-20 items-center justify-center bg-black'>
        {data.map((c,i)=>(
            <Link to={`/${c.media_type || title}/${c.media_type || title}details/${c.id}`} style={{
                backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.7),rgba(0,0,0,0.3),rgba(0,0,0,0)),url(https://image.tmdb.org/t/p/original/${c.backdrop_path ||
                    c.profile_path ||
                    c.poster_path
                    })`,
                backgroundPosition: "50% 25%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
            }} className=' relative h-[20vw] w-[15vw] bg-zinc-400 flex items-end p-4 shadow-[10px_10px_30px_-10px_rgba(255,255,255,0.4)] rounded-sm' key={i}>{c.original_name || c.name || c.original_title || c.title}
            {c.vote_average && <div className='absolute top-[90%] left-[90%] text-center h-[3.3vw] w-[3.2vw] bg-[#E50914] rounded-full flex items-center justify-center'>{(c.vote_average*10).toFixed()} <sup>%</sup></div>}
            
            </Link>
        ))}
    </div>
  )
}

export default Cards