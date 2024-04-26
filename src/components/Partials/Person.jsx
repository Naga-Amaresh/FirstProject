import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "../Topnav";
import axios from "../../utils/axios";
import Cards from "./Cards";
import Loading from "../Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Person = () => {
  document.title = "NAPTV | person";
  const navigate = useNavigate();
  const [person, setperson] = useState([]);
  const [category, setcategory] = useState("popular");
  const [page, setpage] = useState(1);
  const [hasmore, sethasmore] = useState(true);

  const Getperson = async () => {
    try {
      const data = await axios.get(`/person/${category}?page=${page}`);

      // console.log(data.data.results[0]);

      if (data.data.results.length > 0) {
        setperson((prev) => [...prev, ...data.data.results]);
        setpage(page + 1);
      } else {
        sethasmore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const refreshHandler = ()=>{
    if (person.length ===0) {
      Getperson()
      
    }
    else{
      setpage(1);
      setperson([]);
      Getperson()

    }
  }
  useEffect(() => {
    refreshHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="h-screen w-[100%]  bg-black">
      <div className="relative w-full h-[10vh] bg-zinc-800 flex gap-2 px-12 py-4 items-center justify-start outline-none">
        <h1 className="text-xl">
          <i
            onClick={() => navigate(-1)}
            className="cursor-pointer hover:text-[#E50914] ri-arrow-left-line"
          ></i>
          <strong>person</strong>{" "}
          <span className="absolute left-[11%] top-[50%] -translate-y-[50%] text-sm text-zinc-400 font-semibold ">
            [ {category.toUpperCase()} ]
          </span>
        </h1>
        <Topnav />
      </div>
      <InfiniteScroll
        dataLength={person.length}
        next={() => Getperson()}
        hasMore={hasmore}
        loader={<Loading />}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Person;
