import axios from "../src/utils/axios";
import React, { useEffect, useState } from "react";
import noimage from "../public/noimg.jpg";
import Loading from "./components/Loading";
import { Link, useNavigate } from "react-router-dom";
import imageone from "../public/imageOne.png";
import imageSix from "../public/imageSix.jpg";
import imageFive from "../public/imageFive.jpg";
import imageFour from "../public/imageFour.jpg";
import { easeInOut, motion } from "framer-motion";
import wallpaper from "../public/AboutWallpaper.png";

const About = () => {
  const navigate = useNavigate();
  document.title = "NAPTV | About";
  return  (
    <div className="relative h-full max-w-[100vw] overflow-x-hidden sm:h-full sm:w-full pb-40">
      <motion.nav
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: [easeInOut], duration: 2 }}
        className="fixed z-[10] top-0 flex items-center justify-between px-10 py-6 w-full sm:px-60 text-xl sm:w-full sm:py-10"
      >
        <div>
          <h1
            onClick={() => navigate(-1)}
            className="text-red-600 text-2xl cursor-pointer sm:text-4xl sm:text-red-600 font-black"
          >
            NAPTV
          </h1>
        </div>
        <div>
          <Link
            to="/signin"
            className="text-sm  border-white border outline-none px-4 py-1 rounded bg-red-600 sm:text-white border-none sm:text-md font-semibold"
          >
            Sign In
          </Link>
        </div>
      </motion.nav>
      <div className=" relative z-[1] sm:h-[90vh] sm:w-full wrap-div sm:overflow-hidden flex items-center  justify-center border-b-[1px] border-zinc-500 ">
        <div
          className="h-screen w-full relative   min-w-screen min-h-screen flex gap-5 z-[2] sm:left-[1%] sm:rotate-[30deg] rotate-div scale-[1] "
        >
          <div className="relative  sm:w-screen flex flex-wrap gap-5 rotate-[30deg] shrink-0 sm:rotate-0 overflow-hidden">
            
            <img style={{ 
              rotate:"-30deg"

            }} src={wallpaper}  />
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0),rgba(0,0,0,.4),rgba(0,0,0,.6),rgba(0,0,0,1))",
          }}
          className="absolute h-screen w-full sm:h-full sm:w-full top-0 z-[3] flex flex-col items-center justify-center  sm:items-center sm:justify-center gap-6 pt-20"
        >
          <h1 className="sm:text-5xl text-lg  font-bold">
            Unlimited movies, TV shows and more
          </h1>
          <h3 className="sm:text-3xl sm:text-white text-zinc-300">
            Watch anywhere. Cancel anytime.
          </h3>
          <h2 className="sm:text-2xl px-10 text-center text-zinc-300">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h2>
            <form onSubmit={(e) => e.preventDefault()} id="form">
              <input id="email"
                className="px-4 sm:w-[20vw] py-2 outline-none border-[1px] border-zinc-400 rounded-md mr-2 bg-transparent"
                type="email"
                placeholder="Email"
              />
              <input id="Submit"
                className=" sm:w-[20vw] border-white border outline-none px-4 py-2 rounded bg-red-600 sm:text-white border-none sm:text-md font-semibold cursor-pointer transition ease-in-out"
                type="submit"
              />
            </form>
        </div>
      </div>
      <div className="max-sm:h-screen">
        <div className="px-10 sm:h-screen sm:w-full bg-black flex items-center justify-center gap-20 border-b-[1px] border-zinc-500">
          <div className="sm:w-1/2 ">
            <h4 className="relative top-10 left-5 sm:left-0 sm:top-0 sm:text-5xl w-full font-bold  overflow-hidden sm:h-[4vw]">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: [easeInOut], duration: 1 }}
                className="relative z-[4] block "
              >
                Enjoy on your TV
              </motion.span>
            </h4>
            <h4 className="relative top-10 left-5 sm:left-0 sm:top-0  w-full h-40  sm:text-2xl font-lighter sm:text-zinc-400 mt-5 ">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h4>
          </div>
          <div className="sm:inline hidden relative sm:h-[25vw] sm:w-[20vw] rounded-full sm:rounded-xl drop-shadow-[10px_10px_30px_red] sm:overflow-hidden ">
            <img
              data-scroll
              data-scroll-speed="-.2"
              className="h-20 w-40 sm:h-full  sm:w-full scale-125 inline-block rounded-full sm:rounded-xl object-cover "
              src={imageFive}
              alt=""
            />
          </div>
        </div>
        <div className="px-10 sm:h-screen sm:w-full bg-black flex items-center justify-center gap-20 border-b-[1px] border-zinc-500">
          <div className="hidden sm:inline relative sm:h-[25vw] sm:w-[20vw] rounded-xl drop-shadow-[10px_10px_30px_red] sm:overflow-hidden ">
            <img
              data-scroll
              data-scroll-speed="-.2"
              className="sm:h-full sm:w-full scale-125 inline-block rounded-xl object-cover"
              src={imageSix}
              alt=""
            />
          </div>
          <div className="sm:w-1/2 h-40   ">
            <h4 className="sm:text-5xl font-bold mb-5 sm:overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: "0" }}
                viewport={{ once: true }}
                transition={{ ease: [easeInOut], duration: 1 }} className="top-10 left-5 sm:left-0 sm:top-0 relative z-[4] block"
              >
                Download your shows to watch offline
              </motion.span>
            </h4>
            <h4 className="relative top-10 left-5 sm:left-0 sm:top-0 sm:text-2xl font-lighter sm:text-zinc-400 ">
              Save your favourites easily and always have something to watch.
            </h4>
          </div>
        </div>
        <div className="px-10 h-52 pb-10 border-b-[1px] border-zinc-500 sm:h-screen  sm:w-full bg-black flex items-center justify-center gap-20">
          <div className="sm:w-1/2 h-40 sm:overflow-hidden">
            <h4 className="sm:text-5xl font-bold mb-5  w-full sm:overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: [easeInOut], duration: 1 }} className=" top-10 left-5 sm:left-0 sm:top-0 relative z-[4] block"
              >
                Watch everywhere
              </motion.span>
            </h4>
            <h4 className="relative top-10 left-5 sm:left-0 sm:top-0 sm:text-2xl font-lighter sm:text-zinc-400">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h4>
          </div>
          <div className="hidden sm:inline relative  sm:h-[25vw] sm:w-[20vw] sm:rounded-xl sm:drop-shadow-[10px_10px_30px_red] sm:overflow-hidden ">
            <img data-scroll
              data-scroll-speed="-.2"
              className=" hidden sm:inline sm:h-full h-40 w-60 sm:w-full sm:scale-125  sm:rounded-xl "
              src={imageone}
              alt=""
            />
          </div>
        </div>
        <div className="px-10 h-52 pb-10 border-b-[1px] border-zinc-500 sm:h-screen  sm:w-full bg-black flex items-center justify-center gap-20">
          <div className="hidden sm:inline relative   sm:h-[25vw] sm:w-[20vw] sm:rounded-xl sm:drop-shadow-[10px_10px_30px_red] sm:overflow-hidden ">
            <img data-scroll
              data-scroll-speed="-.2"
              className="hidden sm:inline sm:h-full h-40 w-60 sm:w-full sm:scale-125 sm:inline-block sm:rounded-xl object-cover"
              src={imageFour}
              alt=""
            />
          </div>
          <div className="sm:w-1/2">
            <h4 className="sm:text-5xl font-bold mb-5 sm:overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ ease: [easeInOut], duration: 1 }} className="relative top-10 left-5 sm:left-0 sm:top-0  z-[4] block"
              >
                NapTv And Chill
              </motion.span>
            </h4>
            <h4 className="relative top-10 left-5 sm:left-0 sm:top-0 sm:text-2xl font-lighter sm:text-zinc-400 ">
              Make Your day so special with the emotion that you get here
              ,adventures with their favourite characters in a space made just
              for You—free with your membership.
            </h4>
          </div>
        </div>
      </div>
    </div>
  ) 
};

export default About;
