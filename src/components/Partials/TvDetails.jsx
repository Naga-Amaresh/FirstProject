import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../Store/actions/tvActinos";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading";
import Horizantal from "../../Horizantal";

const TvDetails = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.tv);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.8),rgba(0,0,0,0.6),rgba(0,0,0,0)),url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path ||
          info.detail.profile_path ||
          info.detail.poster_path
        })`,
        backgroundPosition: "50% 25%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment:"fixed"
      }}
      className="relative sm:min-h-screen sm:w-full sm:overflow-x-hidden pt-10"
    >
      {/* NAV */}
      <nav className="text-xl sm:w-full sm:py-5 flex items-center justify-start sm:gap-10 sm:px-10 sm:overflow-hidden py-0 gap-4 px-10">
        <Link onClick={() => navigate(-1)}>
          <i className="text-xl sm:hover:text-[#E50914] cursor-pointer sm:text-2xl font-semibold ri-arrow-left-line"></i>
        </Link>
        {info.detail.wikidata &&<a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.detail.wikidata_id}`}
        >
          <i className="sm:hover:text-[#E50914] cursor-pointer  sm:text-2xl  font-semibold ri-external-link-fill"></i>
        </a>}
        {info.detail.homepage &&<a target="_blank" href={info.detail.homepage}>
          <i className="sm:hover:text-[#E50914] cursor-pointer sm:text-2xl  font-semibold ri-earth-fill"></i>
        </a>}
        {info.detail.imdb_id && <a
          target="_blank"
          className="sm:hover:text-[#E50914] cursor-pointer  sm:text-2xl font-semibold "
          href={`https://www.imdb.com/title/${info.detail.imdb_id}`}
        >
          IMDB
        </a>}
      </nav>
      <div className="sm:py-5  sm:w-full flex items-start justify-start sm:px-20 px-10 gap-12">
        <div className="hidden sm:inline relative sm:h-80 sm:w-[80%]  outline-none border-[1px] border-white rounded-3xl">
          <img
            className="sm:h-full sm:w-full object-cover rounded-3xl drop-sm:shadow-[20px_20px_30px_rgba(0,0,0,0.6)]"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                info.detail.backdrop_path ||
                info.detail.profile_path ||
                info.detail.poster_path
              })`,
              backgroundPosition: "50% 25%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
            }}
            alt=""
          />
          <span className="absolute top-[90%] left-[90%] sm:h-[4vw] sm:w-[4vw] bg-red-600 rounded-full sm:text-white flex items-center justify-center">
            {(info.detail.vote_average * 10).toFixed()}%
          </span>
        </div>
        <div className="sm:text-zinc-300 sm:pt-0 pt-40">
          <h1 className="sm:text-4xl font-bold sm:my-4 sm:text-zinc-100 my-10 text-4xl">
            {info.detail.original_title || info.detail.original_name}
          </h1>
          <h4>Release-Date: {info.detail.first_air_date}</h4>
          <h4>
            Genre:{" "}
            <span className="flex gap-4 sm:text-lg font-semibold my-2">
              {info.detail.genres.map((e, i) => e.name).join(" , ")}
            </span>
          </h4>
          <p className="hidden sm:inline sm:text-sm sm:text-zinc-200 leading-1">
            {info.detail.overview}
          </p>
          <h4 className="my-2">Duration: {info.detail.runtime} mins</h4>
          <Link to={`${pathname}/trailer`} className="inline-block my-4 px-4 py-2 bg-[#E50914] rounded sm:text-white">
            Watch Trailer
          </Link>
        </div>
      </div>
      <div className="py-10 flex items-center justify-evenly">
        <div className="hidden sm:inline mx-20  flex items-center gap-4 border-[1px] bg-zinc-900 border-zinc-700 px-4 py-4 rounded-full">
          Available Buy :{" "}
          {info && info.watchProviders && info.watchProviders.buy ? info.watchProviders.buy.map((f, i) => (
            <img key={i} className="sm:h-10 sm:w-10 object-cover outline-none rounded-full border-[1px] border-white "
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${f.logo_path})`,
                backgroundPosition: "50% 25%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
              }}
            />
          )):"No Info"}
        </div>
        <div className="hidden sm:inline mx-20  flex items-center gap-4 border-[1px] bg-zinc-900 border-zinc-700 px-4 py-4 rounded-full">
          Available On Rent :{" "}
          {info && info.watchProviders && info.watchProviders.rent ? info.watchProviders.rent.map((f, i) => (
            <img key={i} className="sm:h-10 sm:w-10 object-cover outline-none rounded-full border-[1px] border-white "
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${f.logo_path})`,
                backgroundPosition: "50% 25%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
              }}
            />
          )):"No Info"}
        </div>
        <div className="hidden sm:inline mx-20  flex items-center gap-4 border-[1px] bg-zinc-900 border-zinc-700 px-4 py-4 rounded-full">
          Available Platforms :{" "}
          {info && info.watchProviders && info.watchProviders.flatrate ? info.watchProviders.flatrate.map((f, i) => (
            <img key={i} className="sm:h-10 sm:w-10 object-cover outline-none rounded-full border-[1px] border-white "
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${f.logo_path})`,
                backgroundPosition: "50% 25%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
              }}
            />
          )):"No Info"}
        </div>
      </div>
        <div className="sm:h-[60vh]  sm:w-full sm:overflow-hidden px-6 sm:px-10  sm:bg-transparent bg-black sm:py-0 py-4 rounded-t-xl">
          <h1 className="sm:text-2xl font-bold py-4 text-xl">Seasons</h1>
          <div className="relative  overflow-x-auto  sm:w-full sm:h-[80%] h-[50vh] w-full  sm:overflow-x-auto sm:overflow-y-hidden flex gap-4 shrink-0 flex-nowrap py-5">
                {info.detail.seasons.length > 0 ? info.detail.seasons.map((b, i) => (
                    <Link to={`/${b.media_type}/${b.media_type}details/${b.id}`} key={b.id}
                    
                        className="sm:h-[100%] h-full min-w-[60vw]  sm:min-w-[20%] overflow-hidden bg-zinc-900 block rounded-lg border-none outline-none sm:overflow-hidden"
                    >
                        <div className="sm:h-[50%] h-32  w-full sm:w-full bg-zinc-400"  style={{
                            backgroundImage: `linear-gradient(to top,rgba(0,0,0,0.7),rgba(0,0,0,0.3),rgba(0,0,0,0)),url(https://image.tmdb.org/t/p/original/${b.backdrop_path ||
                                b.profile_path ||
                                b.poster_path
                                })` ,
                            backgroundPosition: "50% 25%",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "scroll",
                        }}>
                                </div>
                        <div className="p-3">
                        <h1 className="sm:h-10 sm:text-md font-bold sm:text-zinc-100 my-1">
                                {b.original_name ||
                                    b.name ||
                                    b.original_title ||
                                    b.title}
                            </h1>
                            <p className=" sm:text-sm font-regular sm:text-zinc-400 sm:w-[80%] leading-none">
                                {b.overview ? b.overview.slice(0,30) :"No Info"}...
                                <span className="sm:text-[#E50914]">more</span>
                            </p>
                            <span className=" relative sm:left-0 sm:top-4 top-10 sm:bottom-20 px-3 py-2 sm:px-4 sm:py-2 bg-[#E50914] rounded sm:text-white sm:text-xs text-md ">
                                Watch Trailer
                            </span>
                        </div>
                    </Link>
                )):<h1 className="sm:text-4xl sm:text-white font-bold mt-4">Nothing to show dude</h1>}
            </div>
        </div>
        <div className="sm:h-[60vh] sm:w-full sm:overflow-hidden pl-12 pr-6 sm:bg-transparent bg-black sm:pr-8 sm:pl-14 sm:py-0 py-4 ">
          <h1 className="sm:text-2xl font-bold sm:py-4 text-xl my-10 sm:my-0">Recommendations & Similarities</h1>
        <Horizantal data={
          info.recommendations.length > 0  ? info.recommendations : info.similar
        }/>
        </div>
        <Outlet/>
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
