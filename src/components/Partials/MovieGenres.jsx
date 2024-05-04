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

const MovieGenres = () => {
    document.title = "NAPTV | MovieGenres";
    const navigate = useNavigate();
    const [MovieGenres, setMovieGenres] = useState([]);
    const [category, setcategory] = useState("Action");
    const [page, setpage] = useState(1);
    const [hasmore, sethasmore] = useState(true);
    const [isScroll, setisScroll] = useState(false);
    const obj = {
        Action: "28",
        Adventure: "12",
        Drama: "18",
        Animation: "16",
        Comedy: "35",
        Crime: "80",
        Documentary: "99",
        Romance: "10749"
    }
    const GenreResults = obj[category];
    
    const { scrollY } = useScroll();
    
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setisScroll(true);
        } else {
            setisScroll(false);
        }
    });
    
    const GetGenres = async () => {
        try {
            const { data } = await axios.get(
                `/discover/movie?with_genres=${GenreResults}&page=${page}`
            );

            if (data.results.length > 0) {
                setMovieGenres((prev) => [...prev, ...data.results]);
                setpage(page + 1);
            } else {
                sethasmore(false);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const refreshHandler = () => {
        if (MovieGenres.length === 0) {
            GetGenres();
        } else {
            setpage(1);
            setMovieGenres([]);
            GetGenres();
        }
    };
    useEffect(() => {
        refreshHandler();
    }, [category]);

    const scrollup = () => {
        const scroll = new LocomotiveScroll();
        scroll.scrollTo(0);
    };

    return MovieGenres.length > 0 ? (
        <div className="h-screen w-[100%]  bg-black">
            <div className="relative w-full h-[10vh] bg-zinc-800 flex gap-2 px-12 py-4 items-center justify-start outline-none">
                <h1 className="sm:text-xl">
                    <i
                        onClick={() => navigate(-1)}
                        className="cursor-pointer sm:hover:text-[#E50914] ri-arrow-left-line"
                    ></i>
                    <strong>Movie</strong>{" "}
                    <span className="absolute left-[11%] top-[50%] -translate-y-[50%] sm:text-sm sm:text-zinc-400 font-semibold ">
                        [ {category.toUpperCase()} ]
                    </span>
                </h1>
                <Topnav />
                <DropDown
                    title={"category"}
                    options={["Action", "Adventure", "Drama", "Comedy", "Animation", "Comedy", "Documentary", "Crime", "Romance"]}
                    fun={(e) => setcategory(e.target.value)}
                />
            </div>
            {isScroll && (
                <div
                    onClick={() => scrollup()}
                    className="sm:cursor-pointer fixed bottom-[10%] right-4 z-[99] h-[4vw] w-[4vw] rounded-full bg-red-600 flex items-center justify-center "
                >
                    <i className="sm:text-3xl ri-arrow-up-line"></i>
                </div>
            )}
            <InfiniteScroll
                dataLength={MovieGenres.length}
                next={() => GetGenres()}
                hasMore={hasmore}
                loader={<Loading />}
            >
                <Cards data={MovieGenres} title={"movie"} />
            </InfiniteScroll>
        </div>
    ) : (
        <Loading />
    );
};

export default MovieGenres;
