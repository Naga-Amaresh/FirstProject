import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Topnav";
import DropDown from "../../DropDown";
import axios from "../../utils/axios";
import Cards from "./Cards";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  document.title = "NAPTV | Popular";
  const navigate = useNavigate();
  const [Popular, setPopular] = useState([]);
  const [category, setcategory] = useState("movie");
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const GetPopular = async () => {
    try {
      const data = await axios.get(`/${category}/popular?page=${page}`);

      // console.log(data.data.results[0]);

      if (data.data.results.length > 0) {
        setPopular((prev) => [...prev, ...data.data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const refreshHandler = ()=>{
    if (Popular.length ===0) {
      GetPopular()
      
    }
    else{
      setpage(1);
      setPopular([]);
      GetPopular()

    }
  }
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return Popular.length > 0 ? (
    <div className="h-screen w-[100%]  bg-black">
      <div className="relative w-full h-[10vh] bg-zinc-800 flex gap-2 px-12 py-4 items-center justify-start outline-none">
        <h1 className="text-xl">
          <i
            onClick={() => navigate(-1)}
            className="cursor-pointer hover:text-[#E50914] ri-arrow-left-line"
          ></i>
          <strong>Popular</strong>{" "}
          <span className="absolute left-[11%] top-[50%] -translate-y-[50%] text-sm text-zinc-400 font-semibold ">
            [ {category.toUpperCase()} ]
          </span>
        </h1>
        <Topnav />
        <DropDown
          title={"category"}
          options={[ "movie", "tv"]}
          fun={(e) => setcategory(e.target.value)}
        />
      </div>
      <InfiniteScroll
        dataLength={Popular.length}
        next={() => GetPopular()}
        hasMore={hasmore}
        loader={<Loading />}
      >
        <Cards data={Popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
