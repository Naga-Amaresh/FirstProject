import React from "react";
import { Link } from "react-router-dom";

const Horizantal = ({ data ,title}) => {
    return (
    
            <div className="scroll-smooth h-[80vw] max-w-[100vw] overflow-x-auto relative sm:w-full bg-black -ml-4 sm:bg-transparent sm:h-[40vh]  sm:overflow-x-auto sm:overflow-y-hidden flex gap-4 shrink-0 flex-nowrap py-2">
                {data.length > 0 ? data.map((b, i) => (
                    <Link to={`/${b.media_type || title }/${b.media_type || title }details/${b.id}`} key={i}
                    
                        className=" h-full min-w-[60vw] sm:h-full sm:min-w-[25%] overflow-hidden bg-zinc-900 block rounded-lg border-none outline-none sm:overflow-hidden sm:mb-10 "
                    >
                        <div className="sm:h-[46%] sm:w-full bg-zinc-400 h-32  "  style={{
                            backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.7),rgba(0,0,0,0.3),rgba(0,0,0,0)),url(https://image.tmdb.org/t/p/original/${  b.backdrop_path ||
                                b.profile_path || b.poster_path
                                })`,
                            backgroundPosition: "50% 25%",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "scroll",
                        }}>
                                </div>
                        <div className="p-3 h-[54%] w-full sm:flex sm:flex-col sm:items-start sm:justify-evenly flex-col items-start justify-between flex ">
                        <h1 className="sm:h-10 sm:text-md font-bold sm:text-zinc-100 ">
                                {(b.original_name ||
                                    b.name ||
                                    b.original_title ||
                                    b.title).slice(0,24)}
                            </h1>
                            <p className="sm:-top-3 relative top-1 text-zinc-500 sm:h-8 sm:text-sm font-regular sm:text-zinc-400 sm:w-[80%] sm:my-2 leading-none">
                                {b.overview.slice(0,30)}...
                                <span className="sm:text-[#E50914]">more</span>
                            </p>

                            <span className="px-2 py-2 sm:px-4 sm:py-2 bg-[#E50914] rounded sm:text-white text-white sm:text-md text-sm ">
                                Watch Trailer
                            </span>
                        </div>
                    </Link>
                )):<h1 className="sm:text-4xl sm:text-white font-bold sm:mt-4">Nothing to show dude</h1>}
            </div>
    );
};

export default Horizantal;
