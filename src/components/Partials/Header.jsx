import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Header = ({ wallpaper }) => {
    
    return wallpaper ?  (
        <div
            className="sm:h-[55vh] h-[55vh] w-full sm:w-full bg-zinc-400 sm:py-6 sm:px-10 flex flex-col items-start justify-end"
            style={{
                backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.8),rgba(0,0,0,0.6),rgba(0,0,0,0)),url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.profile_path || wallpaper.poster_path 
                    })`,
                backgroundPosition: "50% 25%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
            }}
        >


            <h1 className="sm:text-4xl text-5xl px-5 py-4 sm:py-2 sm:-mx-[1vw] font-bold sm:text-zinc-100 mb-2">{wallpaper.original_name || wallpaper.name || wallpaper.original_title || wallpaper.title }</h1>
            <p className="sm:text-sm font-regular text-sm sm:ml-0  hidden sm:inline sm:text-zinc-400 sm:w-[40%] my-0 sm:my-2 leading-none">{wallpaper.overview}...<Link to={`/${wallpaper.media_type}/${wallpaper.media_type}details/${wallpaper.id}`} className="sm:text-[#E50914]">more</Link></p>
            <p className="sm:mt-2 mx-6 mt-[1vw] mb-[5vw] sm:my-2 sm:ml-0  sm:text-lg"><i className="sm:text-[#E50914] ri-megaphone-fill mr-2 inline"></i>{wallpaper.release_date ? wallpaper.release_date : "No Info" }     <i className="sm:text-[#E50914] ri-movie-fill mx-2 inline"></i>{wallpaper.media_type}</p>
            <Link to={`/${wallpaper.media_type}/${wallpaper.media_type}details/${wallpaper.id}/trailer`} className="sm:my-4 sm:px-4 sm:py-2 bg-[#E50914] sm:mx-0 py-2 px-2 mx-6 my-4 -mt-[2vw] rounded sm:text-white" >Watch Trailer</Link>
        </div>
    ):<Loading/>
};

export default Header;
