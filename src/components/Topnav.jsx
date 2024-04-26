import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState([]);

  const Getsearches = async () => {
    try {
      const data = await axios.get(`/search/multi?query=${query}`);
      setsearch(data.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    Getsearches();
  }, [query]);

  return (
    <div className="relative w-[80%] h-[10vh] px-[10vw] py-6 z-[9999]">
      <input
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className="py-2 px-4 bg-transparent border-[1px] border-zinc-400 rounded-full outline-none w-[40vw]"
        type="text"
        placeholder="Search "
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-2xl ml-2 cursor-pointer ri-close-line "
        ></i>
      )}
      <div className="absolute overflow-y-auto rounded  w-[63%] max-h-[50vh]  top-[100%]">

        {search.map((a,i)=>(
          <Link to={`/${a.media_type}/${a.media_type}details/${a.id}`} key={i} className="hover:text-black hover:bg-zinc-400 text-zinc-600 border-b border-zinc-800 block p-2 bg-zinc-300">
          <img className="w-[4vw] h-[4vw] object-cover inline mr-4 rounded-lg drop-shadow-lg " src={a.backdrop_path || a.profile_path || a.poster_path ?`https://image.tmdb.org/t/p/original/${a.backdrop_path || a.poster_path || a.profile_path}`:"https://imgs.search.brave.com/AgRYlUxNlzd2KgQD6fTNOM8Y5ebx7660-bzT2XSvdio/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzgxLzg0Lzcx/LzM2MF9GXzU4MTg0/NzE3Nl9lRjU0MFhx/RkdIRGRHUFp4eWg1/TnRXSE56Z3MwWEZr/Ni5qcGc"} alt="" />
          <span className="text-md text-zinc-900 font-semibold">{a.original_title || a.original_name || a.title || a.name}</span>
        </Link>
        ))}
        
      </div>
    </div>
  );
};

export default Topnav;
