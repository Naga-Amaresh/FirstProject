import React, { useEffect, useState } from "react";
import Sidenav from "./Partials/Sidenav";
import Topnav from "./Topnav";
import Header from "./Partials/Header";
import axios from "../utils/axios";
import Loading from "./Loading";
import Horizantal from "../Horizantal";
import DropDown from "../DropDown";
import { Link } from "react-router-dom";
// import GenreMovies from "./Store/actions/GenreMovies";
// import FilterGenres from "../FilterGenres";

const Home = () => {
  document.title = "NAPTV | HomePage";

  const [wallpaper, setwallpaper] = useState([]);
  const [MovieGenres, setMovieGenres] = useState([]);
  const [TvGenres, setTvGenres] = useState([]);
  const obj = {
    Action: "28",
    Adventure: "12",
    Drama: "18",
    Animation: "16",
    Comedy: "35",
    Crime: "80",
    Documentary: "99",
    Romance: "10749",
  };
  const [MovieGenreCategory, setMovieGenreCategory] = useState("Action");
  const [TvGenreCategory, setTvGenreCategory] = useState("Romance");
  const [trending, settrending] = useState([]);
  const [category, setcategory] = useState("all");
  const [move, setmove] = useState(true);
  const Movieresults = obj[MovieGenreCategory];
  const Tvresults = obj[TvGenreCategory];

  const GetTrending = async () => {
    try {
      const data = await axios.get(`/trending/${category}/day`);
      settrending(data.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  const GetMovieGenres = async () => {
    try {
      const { data } = await axios.get(
        `/discover/movie?with_genres=${Movieresults}`
      );
      setMovieGenres(data.results);
    } catch (error) {
      console.error(error);
    }
  };
  const GetTvGenres = async () => {
    try {
      const tvdata = await axios.get(`/discover/tv?with_genres=${Tvresults}`);
      setTvGenres(tvdata.data.results);
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
    MovieGenres && GetMovieGenres();
    TvGenres && GetTvGenres();
  }, [category, MovieGenreCategory, TvGenreCategory]);
  

  return wallpaper && trending && TvGenres && MovieGenres ? (
    <div className="relative h-screen w-full  sm:w-full sm:min-h-screen bg-black sm:overflow-x-hidden ">
      <Sidenav move={move} fun={() => setmove(true)} />
      <div className="sm:min-h-screen sm:w-[100%]">
        <Topnav fun={() => setmove(false)} />
        <Header wallpaper={wallpaper} />
        <div className="relative sm:h-[60vh] sm:w-full pl-10 bg-black">
          <div className="sm:w-full pt-6 pb-6 pr-6 flex items-center justify-between sm:text-2xl bg-black">
            <h1>
              <span className="text-xl">{category.toUpperCase()}</span>
              <Link to="/trending">
                <i className="hover:text-red-600 ri-arrow-right-line"></i>
              </Link>
            </h1>
            <span className="hidden sm:inline"><DropDown
              title={"Filter"}
              options={["all", "tv", "movie"]}
              
              fun={(e) => setcategory(e.target.value)}
            /></span>
          </div>
          <div className="sm:h-[40vh] sm:w-full bg-black sm:px-2">
            <Horizantal data={trending} />
          </div>
        </div>
        {/* movie */}

        {
          MovieGenres && <div className="relative sm:h-[60vh] sm:w-full pl-10 bg-black">
          <div className="sm:w-full pt-6  pb-6 pr-6 flex items-center justify-between sm:text-2xl">
            <h1 className="text-xl -ml-3">
              Moive <span className="hidden sm:inline">- {MovieGenreCategory.toUpperCase()}</span>
              <Link to="/moviegenres">
                <i className="hover:text-red-600 ri-arrow-right-line"></i>
              </Link>
            </h1>
            <span className="hidden sm:inline ">
            <DropDown
              title={"Filter"}
              options={[
                "Action",
                "Adventure",
                "Drama",
                "Comedy",
                "Animation",
                "Comedy",
                "Documentary",
                "Crime",
                "Romance",
              ]}
              fun={(e) => setMovieGenreCategory(e.target.value)}
            />
            </span>
          </div>
          <div className="sm:h-[40vh] sm:w-full sm:px-2">
            <Horizantal data={MovieGenres} title={"movie"} />
          </div>
        </div>
        }
        {/* Tv */}
        {TvGenres   && (
          <div className="relative sm:h-[60vh] sm:w-full pl-6 bg-black">
            <div className="sm:w-full pt-6 pb-6 pr-6 flex items-center bg-black justify-between sm:text-2xl">
              <h1 className="text-2xl  ">
                Tv<span className="hidden sm:inline">- {TvGenreCategory.toUpperCase()}</span>
                <Link to="/tvgenres">
                  <i className="hover:text-red-600 ri-arrow-right-line"></i>
                </Link>
              </h1>
              <span className="hidden sm:inline"><DropDown
                title={"Filter"}
                options={[
                  "Drama",
                  "Comedy",
                  "Animation",
                  
                  "Documentary",
                  "Crime",
                  "Romance",
                ]}
                fun={(e) => setTvGenreCategory(e.target.value)}
              /></span>
            </div>
            <div className="sm:h-[40vh] sm:w-full bg-black overflow-x-hidden">
              <Horizantal data={TvGenres} title={"tv"} />
            </div>
          </div>
        )}
        
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
