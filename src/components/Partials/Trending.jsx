import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Topnav";
import DropDown from "../../DropDown";
import axios from "../../utils/axios";
import Cards from "./Cards";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import LocomotiveScroll from "locomotive-scroll";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Trending = () => {
  document.title = "NAPTV | Trending";
  const navigate = useNavigate();
  const [trending, settrending] = useState([]);
  const [Duration, setDuration] = useState("day");
  const [category, setcategory] = useState("all");
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);
  const [isScroll, setisScroll] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setisScroll(true);
    } else {
      setisScroll(false);
    }
  });

  const GetTrending = async () => {
    try {
      const {data} = await axios.get(
        `/trending/${category}/${Duration}?page=${page}`
      );

      if (data.results.length > 0) {
        settrending((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const refreshHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  };
  useEffect(() => {
    refreshHandler();
  }, [category, Duration]);

  const scrollup = () => {
    const scroll = new LocomotiveScroll();
    scroll.scrollTo(0);
  };

  return trending.length > 0 ? (
    <div className="h-full w-[100%]  sm:w-full  bg-black ">
      <div className="relative h-[10vh] w-full  sm:w-full sm:h-[10vh] bg-zinc-800 flex  gap-0 sm:gap-4 px-12 py-4 items-center justify-start outline-none">
        <h1 className="text-md sm:text-xl ">
          <i
            onClick={() => navigate(-1)}
            className="text-xl relative sm:left-[0%] left-[-120%]  sm:cursor-pointer sm:hover:text-[#E50914] ri-arrow-left-line"
          ></i>
          <strong className="sm:inline hidden">Trending</strong>{" "}
          <span className="sm:inline hidden absolute left-[11%] top-[50%] -translate-y-[50%] sm:text-sm sm:text-zinc-400 font-semibold ">
            [ {category.toUpperCase()} ]
          </span>
        </h1>
        <Topnav />
        <span className="sm:block hidden">
        <DropDown
          title={category}
          options={["all", "movie", "tv"]}
          fun={(e) => setcategory(e.target.value)}
        />
        </span>
        <span className="sm:block hidden"><DropDown
          title={Duration}
          options={["day", "week"]}
          fun={(e) => setDuration(e.target.value)}
        /></span>
      </div>
      {isScroll && (
        <div
          onClick={() => scrollup()}
          className="sm:cursor-pointer h-[15vw] w-[15vw]  fixed bottom-[10%] right-4 z-[99] sm:h-[4vw] sm:w-[4vw] rounded-full bg-red-600 flex items-center justify-center "
        >
          <i className="sm:text-2xl text-xl ri-arrow-up-line"></i>
        </div>
      )}
      <InfiniteScroll
        dataLength={trending.length}
        next={() => GetTrending()}
        hasMore={hasmore}
        loader={<Loading />}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
