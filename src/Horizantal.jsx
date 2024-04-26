import React from "react";
import { Link } from "react-router-dom";

const Horizantal = ({ data }) => {
    return (
    
            <div className="relative w-full h-[40vh]  overflow-x-auto overflow-y-hidden flex gap-4 shrink-0 flex-nowrap py-2">
                {data.length > 0 ? data.map((b, i) => (
                    <Link to={`/${b.media_type}/${b.media_type}details/${b.id}`} key={b.id}
                    
                        className="h-[100%] min-w-[20%] bg-zinc-900 block rounded-lg border-none outline-none overflow-hidden "
                    >
                        <div className="h-[50%] w-full bg-zinc-400"  style={{
                            backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.7),rgba(0,0,0,0.3),rgba(0,0,0,0)),url(https://image.tmdb.org/t/p/original/${  b.backdrop_path ||
                                b.profile_path || b.poster_path
                                })`,
                            backgroundPosition: "50% 25%",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "scroll",
                        }}>
                                </div>
                        <div className="p-3">
                        <h1 className="h-10 text-md font-bold text-zinc-100 my-1">
                                {b.original_name ||
                                    b.name ||
                                    b.original_title ||
                                    b.title}
                            </h1>
                            <p className="h-8 text-sm font-regular text-zinc-400 w-[80%] my-2 leading-none">
                                {b.overview.slice(0,30)}...
                                <span className="text-[#E50914]">more</span>
                            </p>

                            <span className="my-2 px-4 py-2 bg-[#E50914] rounded text-white text-xs ">
                                Watch Trailer
                            </span>
                        </div>
                    </Link>
                )):<h1 className="text-4xl text-white font-bold mt-4">Nothing to show dude</h1>}
            </div>
    );
};

export default Horizantal;
