import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "../utils/axios";

const Topnav = ({fun}) => {
  const {pathname} = useLocation();
  const [Isval, setIsval] = useState(true);
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
    <div className={`sm:relative sm:${pathname==='/'?"left-[20%]":"left-[0%]"}   h-[10vh] w-full sm:w-[100%] sm:h-[10vh] sm:flex sm:items-center  px-[10vw] py-6 z-[99]`}>
      <div className="sm:flex sm:items-center sm:justify-start">
      {pathname==='/' && <i
            onClick={fun}
            className={`sm:text-xl ${Isval?"inline":"hidden"} relative sm:-left-[65%] -left-[8%] text-xl cursor-pointer ri-menu-fill`}
          ></i>}
      <input id="query"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        className="hidden sm:inline sm:py-2 sm:px-4 bg-transparent border-[1px] border-zinc-400 sm:rounded-full sm:outline-none sm:w-[40vw]"
        type="text"
        placeholder="Search "
      />
      <span onClick={()=>setIsval(false)} className={`sm:hidden ${Isval?"inline":"hidden"} text-xl absolute right-[10%]`}><i className="ri-search-line"></i></span>
      </div>

      
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="hidden sm:inline sm:text-2xl ml-2 cursor-pointer ri-close-line " 
        ></i>
      )}
      <div className="z-[401] top-20 left-0 max-h-[50vh] bg-zinc-300   overflow-x-hidden overflow-y-auto   absolute sm:overflow-y-auto rounded w-full  sm:w-[63%] sm:max-h-[50vh]  sm:top-[100%]">

        {search.map((a,i)=>(
          <Link to={`/${a.media_type}/${a.media_type}details/${a.id}`} key={i} className="hover:sm:text-black hover:bg-zinc-400 sm:text-zinc-600 border-b border-zinc-800 block  gap-2 sm:p-2 bg-zinc-300">
          <img className="w-16 h-16 rounded-xl px-2 w-10  py-2 sm:p-0 sm:h-[4vw] sm:w-16 object-cover inline mr-4 sm:rounded-lg sm:drop-shadow-lg " src={a.backdrop_path || a.profile_path || a.poster_path ?`https://image.tmdb.org/t/p/original/${a.backdrop_path || a.poster_path || a.profile_path}`:"https://imgs.search.brave.com/AgRYlUxNlzd2KgQD6fTNOM8Y5ebx7660-bzT2XSvdio/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzgxLzg0Lzcx/LzM2MF9GXzU4MTg0/NzE3Nl9lRjU0MFhx/RkdIRGRHUFp4eWg1/TnRXSE56Z3MwWEZr/Ni5qcGc"} alt="" />
          <span className="text-md overflow-hidden flex-nowrap text-black sm:text-md sm:text-md sm:text-zinc-900 font-semibold">{a.original_title || a.original_name || a.title || a.name}</span>
        </Link>
        ))}
        
      </div>
        <div style={{
          backgroundColor: "rgba(0,0,0,0.9)",
        }} className={`sm:hidden  ${Isval?"hidden":"block"} h-[100vh] pointer-events-all overflow-y-hidden w-[100vw] fixed z-[400] left-0 top-0 `}>
          <i onClick={()=>setIsval(true)} className="text-[8vw] text-zinc-400 relative left-5  top-5 ri-arrow-left-line"></i>
        <input id="query2"
          value={query}
          onChange={(e) => setquery(e.target.value)}
          className="bg-transparent relative top-4 h-10 max-w-60 left-10 px-3 py-2 w-[80%] border-zinc-400 border-[1px] rounded-full"
          type="text"
          placeholder="Search "
        />
        {
        query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="sm:text-2xl relative right-0 top-4 text-xl ml-2 cursor-pointer ri-close-line " 
          ></i>
        )}
        
        </div>
    </div>
  );
};

export default Topnav;
