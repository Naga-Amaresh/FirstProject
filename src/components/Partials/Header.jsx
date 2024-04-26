import React from "react";
import { Link } from "react-router-dom";

const Header = ({ wallpaper }) => {
    
    return (
        <div
            className="h-[55vh] w-full bg-zinc-400 py-6 px-10 flex flex-col items-start justify-end"
            style={{
                backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.8),rgba(0,0,0,0.6),rgba(0,0,0,0)),url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.profile_path || wallpaper.poster_path 
                    })`,
                backgroundPosition: "50% 25%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
            }}
        >


            <h1 className="text-3xl font-bold text-zinc-100 mb-2">{wallpaper.original_name || wallpaper.name || wallpaper.original_title || wallpaper.title }</h1>
            <p className="text-sm font-regular text-zinc-400 w-[40%] my-2 leading-none">{wallpaper.overview}...<Link to={`/${wallpaper.media_type}/${wallpaper.media_type}details/${wallpaper.id}`} className="text-[#E50914]">more</Link></p>
            <p className="mt-2 text-lg"><i className="text-[#E50914] ri-megaphone-fill mr-2 inline"></i>{wallpaper.release_date ? wallpaper.release_date : "No Info" }     <i className="text-[#E50914] ri-movie-fill mx-2 inline"></i>{wallpaper.media_type}</p>
            <Link to={`/${wallpaper.media_type}/${wallpaper.media_type}details/${wallpaper.id}/trailer`} className="my-4 px-4 py-2 bg-[#E50914] rounded text-white" >Watch Trailer</Link>
        </div>
    );
};

export default Header;
