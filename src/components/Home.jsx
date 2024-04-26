import React, { useEffect, useState } from "react";
import Sidenav from "./Partials/Sidenav";
import Topnav from "./Topnav";
import Header from "./Partials/Header";
import axios from "../utils/axios";
import Loading from "./Loading";
import Horizantal from "../Horizantal";
import DropDown from "../DropDown";
import { Outlet } from "react-router-dom";

const Home = () => {
  document.title = "NAPTV | HomePage";

  const [wallpaper, setwallpaper] = useState([]);
  const [trending, settrending] = useState([]);
  const [category, setcategory] = useState("all")

  const GetTrending = async () => {
    try {
      const data = await axios.get(`/trending/${category}/day`);
      settrending(data.data.results);
    } catch (error) {
      console.error(error);
    }
  };


  const GetWallPaper = async () => {
    try {
      const data = await axios.get("/trending/all/day");
      const randomNumber =
        data.data.results[Math.floor(Math.random() * data.data.results.length)];
      setwallpaper(randomNumber);
      // console.log((Math.random()*data.data.results.length).toFixed())
      // console.log(Math.floor(Math.random()*data.data.results.length))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    wallpaper && GetWallPaper();
    trending && GetTrending();
  }, [category]);
  return wallpaper && trending ? (
    <div className="w-full h-screen flex">
      <Sidenav />
      <div className="h-screen w-[80%] overflow-auto">
        <Topnav />
        <Header wallpaper={wallpaper} />
        <div className="relative h-[60vh] w-full pl-10">
          <div className="w-full pt-6 pb-6 pr-6 flex items-center justify-between text-2xl">
            <h1>{category.toUpperCase()}</h1>
            <DropDown title={"Filter"} options={["all", "tv", "movie",]} fun={(e) => setcategory(e.target.value)} />
          </div>
          <div className="h-[40vh] w-full">
          <Horizantal data={trending} />
          </div>
        </div>
        {/* <Outlet/> */}
        
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
