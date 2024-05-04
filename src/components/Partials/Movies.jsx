import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Topnav";
import DropDown from "../../DropDown";
import axios from "../../utils/axios";
import Cards from "./Cards";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import LocomotiveScroll from "locomotive-scroll";
import { useMotionValueEvent, useScroll } from "framer-motion"

const Movies = () => {
  document.title = "NAPTV | Movies";
  const navigate = useNavigate();
  const [Movies, setMovies] = useState([]);
  const [category, setcategory] = useState("popular");
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const [isScroll, setisScroll] = useState(false);

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
  if (latest > 100) {
    setisScroll(true);
  }   else{
    setisScroll(false);
  }
})

  const GetMovies = async () => {
    try {
      const data = await axios.get(`/movie/${category}?page=${page}`);

      // console.log(data.data.results[0]);

      if (data.data.results.length > 0) {
        setMovies((prev) => [...prev, ...data.data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const refreshHandler = ()=>{
    if (Movies.length ===0) {
      GetMovies()
      
    }
    else{
      setpage(1);
      setMovies([]);
      GetMovies()

    }
  }
  useEffect(() => {
    refreshHandler();
  }, [category]);
  const scrollup = ()=>{
    const scroll = new LocomotiveScroll();
    scroll.scrollTo(0);
  }

  return Movies.length > 0 ? (
    <div className="h-full w-[100%]  sm:w-full  bg-black ">
      <div className="relative h-[10vh] w-full  sm:w-full sm:h-[10vh] bg-zinc-800 flex gap-0 sm:gap-2 px-12 py-4 items-center justify-start outline-none">
        <h1 className="text-md sm:text-xl ">
          <i
            onClick={() => navigate(-1)}
            className="relative sm:left-[0%] left-[-120%] text-xl  sm:cursor-pointer sm:hover:text-[#E50914] ri-arrow-left-line"
          ></i>
          <strong className="sm:inline hidden">Movies</strong>{" "}
          <span className="sm:inline hidden absolute left-[11%] top-[50%] -translate-y-[50%] sm:text-sm sm:text-zinc-400 font-semibold  ">
            [ {category.toUpperCase()} ]
          </span>
        </h1>
        <Topnav />
        <span className="sm:block hidden">
        <DropDown
          title={"category"}
          options={[ "now_playing","top_rated","upcoming","popular"]}
          fun={(e) => setcategory(e.target.value)}
        />
        </span>
        {isScroll && <div onClick={()=>scrollup()}
        className="sm:cursor-pointer h-[15vw] w-[15vw]  fixed bottom-[10%] right-4 z-[99] sm:h-[4vw] sm:w-[4vw] rounded-full bg-red-600 flex items-center justify-center"
        
      >
        <i className="sm:text-2xl text-xl  ri-arrow-up-line"></i>
      </div>}
      </div>
      <InfiniteScroll
        dataLength={Movies.length}
        next={() => GetMovies()}
        hasMore={hasmore}
        loader={<Loading />}
      >
        <Cards data={Movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movies;
