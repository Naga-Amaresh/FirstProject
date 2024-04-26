import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Topnav";
import DropDown from "../../DropDown";
import axios from "../../utils/axios";
import Cards from "./Cards";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const TvShows = () => {
  document.title = "NAPTV | TvShows";
  const navigate = useNavigate();
  const [TvShows, setTvShows] = useState([]);
  const [category, setcategory] = useState("airing_today");
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const GetTvShows = async () => {
    try {
      const data = await axios.get(`/tv/${category}?page=${page}`);

      // console.log(data.data.results[0]);

      if (data.data.results.length > 0) {
        setTvShows((prev) => [...prev, ...data.data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const refreshHandler = ()=>{
    if (TvShows.length ===0) {
      GetTvShows()
      
    }
    else{
      setpage(1);
      setTvShows([]);
      GetTvShows()

    }
  }
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return TvShows.length > 0 ? (
    <div className="h-screen w-[100%]  bg-black">
      <div className="relative w-full h-[10vh] bg-zinc-800 flex gap-2 px-12 py-4 items-center justify-start outline-none">
        <h1 className="text-xl">
          <i
            onClick={() => navigate(-1)}
            className="cursor-pointer hover:text-[#E50914] ri-arrow-left-line"
          ></i>
          <strong>TvShows</strong>{" "}
          <span className="absolute left-[11%] top-[50%] -translate-y-[50%] text-sm text-zinc-400 font-semibold ">
            [ {category.toUpperCase()} ]
          </span>
        </h1>
        <Topnav />
        <DropDown
          title={"category"}
          options={[ "airing_today","on_the_air","top_rated","popular"]}
          fun={(e) => setcategory(e.target.value)}
        />
      </div>
      <InfiniteScroll
        dataLength={TvShows.length}
        next={() => GetTvShows()}
        hasMore={hasmore}
        loader={<Loading />}
      >
        <Cards data={TvShows} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default TvShows;
