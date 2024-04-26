import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {

  return (
    <div
      className="h-full w-[20%] border-r-[1px]
    border-zinc-700 p-10"
    >
      <h1 className="mb-2 cursor-pointer">
        <i className="text-[#E50914]  text-2xl mr-2 ri-movie-2-fill"></i>
        <span className="text-2xl font-semibold">NAPTV.</span>
      </h1>
      <hr className="outline-none border-none h-[1px] bg-zinc-800" />

      <nav className="flex flex-col gap-4 mb-2 text-zinc-400">
        <h1 className="font-bold mt-5 text-zinc-300">NEW FEEDS</h1>
        <Link to="/trending" className="p-3 text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded hover:text-[#FFFFFF]">
          <i className=" ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular" className="p-3 text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded hover:text-[#FFFFFF]">
          <i className="mr-2  ri-bard-fill"></i>
        Popular
        </Link>
        <Link to="/movie" className="p-3 text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded hover:text-[#FFFFFF]">
        
          <i className="mr-2  ri-movie-fill"></i>Movies
        </Link>
        <Link to="/tv" className="p-3 text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded hover:text-[#FFFFFF]">
          <i className="mr-2  ri-tv-2-fill"></i>Tv Shows
        </Link>
        <Link to="/person" className="p-3 text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded hover:text-[#FFFFFF]">
          <i className="mr-2  ri-team-fill"></i>
          People
        </Link>
        <hr className="outline-none border-none h-[1px] bg-zinc-800" />
        <h1 className="font-bold mt-5 text-zinc-300">Website Information</h1>
        <Link to="/about" className="p-3 text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded hover:text-[#FFFFFF]">
          <i className="mr-2  ri-information-2-fill"></i>About NAPTV
        </Link>
        <Link to="/contact" className="p-3 text-lg hover:bg-[#E50914] transition duration-150 ease-in-out  rounded hover:text-[#FFFFFF]">
          <i className="mr-2  ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
