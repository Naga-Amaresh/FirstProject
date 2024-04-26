import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Topnav";
import DropDown from "../../DropDown";
import axios from "../../utils/axios";
import Cards from "./Cards";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  document.title = "NAPTV | Trending";
  const navigate = useNavigate();
  const [trending, settrending] = useState([]);
  const [Duration, setDuration] = useState("day");
  const [category, setcategory] = useState("all");
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const GetTrending = async () => {
    try {
      const data = await axios.get(`/trending/${category}/${Duration}?page=${page}`);

      // console.log(data.data.results[0]);

      if (data.data.results.length > 0) {
        settrending((prev) => [...prev, ...data.data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const refreshHandler = ()=>{
    if (trending.length ===0) {
      GetTrending()
      
    }
    else{
      setpage(1);
      settrending([]);
      GetTrending()

    }
  }
  useEffect(() => {
    refreshHandler();
  }, [category, Duration]);

  return trending.length > 0 ? (
    <div className="h-screen w-[100%]  bg-black">
      <div className="relative w-full h-[10vh] bg-zinc-800 flex gap-2 px-12 py-4 items-center justify-start outline-none">
        <h1 className="text-xl">
          <i
            onClick={() => navigate(-1)}
            className="cursor-pointer hover:text-[#E50914] ri-arrow-left-line"
          ></i>
          <strong>Trending</strong>{" "}
          <span className="absolute left-[11%] top-[50%] -translate-y-[50%] text-sm text-zinc-400 font-semibold ">
            [ {category.toUpperCase()} ]
          </span>
        </h1>
        <Topnav />
        <DropDown
          title={"category"}
          options={["all", "movie", "tv"]}
          fun={(e) => setcategory(e.target.value)}
        />
        <DropDown
          title={"Duration"}
          options={["day", "week"]}
          fun={(e) => setDuration(e.target.value)}
        />
      </div>
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
