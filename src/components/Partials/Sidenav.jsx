import React from "react";
import { Link } from "react-router-dom";

const Sidenav = ({fun,move}) => {

  return  (
    <div
      className={`fixed  z-[100] w-full h-full overflow-y-auto  bg-black sm:h-full sm:w-[20%] border-r-[1px] sm:text-xl  sm:text-lg    
      border-zinc-700 p-10 ${move?"-translate-x-[100%]":"-translate-x-[0]"} transition duration-300`}
    >
      <h1 className="sm:mb-2 text-2xl cursor-pointer flex justify-between">
        <div><i className="sm:text-[#E50914] text-lg   sm:text-2xl mr-2 ri-movie-2-fill"></i>
        <span className="sm:text-2xl font-semibold">NAPTV.</span></div>
        <i onClick={fun} className="sm:text-2xl ri-close-line"></i>
      </h1>
      <hr className="outline-none border-none sm:h-[1px] bg-zinc-800" />

      <nav className="flex flex-col gap-4 text-2xl text-zinc-300 mb-2 sm:text-zinc-400">
        <h1 className=" block font-bold text-lg  text-zinc-500 sm:text-xl mt-5 sm:text-zinc-300">NEW FEEDS</h1>
        <Link to="/trending" className="hover:translate-x-[4%] p-3 sm:text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded sm:hover:text-[#FFFFFF]">
          <i className=" ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular" className=" hover:translate-x-[4%] p-3 sm:text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded sm:hover:text-[#FFFFFF]">
          <i className="mr-2  ri-bard-fill"></i>
        Popular
        </Link>
        <Link to="/movie" className=" hover:translate-x-[4%] p-3 sm:text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded sm:hover:text-[#FFFFFF]">
        
          <i className="mr-2  ri-movie-fill"></i>Movies
        </Link>
        <Link to="/tv" className=" hover:translate-x-[4%] p-3 sm:text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded sm:hover:text-[#FFFFFF]">
          <i className="mr-2  ri-tv-2-fill"></i>Tv Shows
        </Link>
        <Link to="/person" className="hover:translate-x-[4%]  p-3 sm:text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded sm:hover:text-[#FFFFFF]">
          <i className="mr-2  ri-team-fill"></i>
          People
        </Link>
        <hr className="outline-none border-none sm:h-[1px] bg-zinc-800" />
        <h1 className="font-bold mt-5 text-zinc-500 sm:text-zinc-300 text-lg  sm:text-xl">Website Information</h1>
        <Link to="/about" className=" hover:translate-x-[4%] text-zinc-300 p-3 sm:text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded sm:hover:text-[#FFFFFF]">
          <i className="mr-2  ri-information-2-fill"></i>About NAPTV
        </Link>
        <Link to="/contact" className="hover:translate-x-[4%] text-zinc-300 p-3 sm:text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded sm:hover:text-[#FFFFFF]">
          <i className="mr-2  ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
