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
      className="relative min-h-screen w-full overflow-x-hidden pt-10"
    >
      {/* NAV */}
      <nav className="w-full py-5 flex items-center justify-start gap-10 px-10 overflow-hidden">
        <Link onClick={() => navigate(-1)}>
          <i className="hover:text-[#E50914] cursor-pointer text-lg font-semibold ri-arrow-left-line"></i>
        </Link>
        {info.detail.wikidata &&<a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.detail.wikidata_id}`}
        >
          <i className="hover:text-[#E50914] cursor-pointer text-lg font-semibold ri-external-link-fill"></i>
        </a>}
        {info.detail.homepage &&<a target="_blank" href={info.detail.homepage}>
          <i className="hover:text-[#E50914] cursor-pointer text-lg font-semibold ri-earth-fill"></i>
        </a>}
        {info.detail.imdb_id && <a
          target="_blank"
          className="hover:text-[#E50914] cursor-pointer text-lg font-semibold "
          href={`https://www.imdb.com/title/${info.detail.imdb_id}`}
        >
          IMDB
        </a>}
      </nav>
      <div className="py-5 w-full flex items-start justify-start px-20 gap-12 ">
        <div className="relative h-80 w-[80%]  outline-none border-[1px] border-white rounded-3xl">
          <img
            className="h-full w-full object-cover rounded-3xl drop-shadow-[20px_20px_30px_rgba(0,0,0,0.6)]"
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
          <span className="absolute top-[90%] left-[90%] h-[4vw] w-[4vw] bg-red-600 rounded-full text-white flex items-center justify-center">
            {(info.detail.vote_average * 10).toFixed()}%
          </span>
        </div>
        <div className="text-zinc-300">
          <h1 className="text-4xl font-bold my-4 text-zinc-100">
            {info.detail.original_title || info.detail.original_name}
          </h1>
          <h4>Release-Date: {info.detail.first_air_date}</h4>
          <h4>
            Genre:{" "}
            <span className="flex gap-4 text-lg font-semibold my-2">
              {info.detail.genres.map((e, i) => e.name).join(" , ")}
            </span>
          </h4>
          <p className="text-sm text-zinc-200 leading-1 ">
            {info.detail.overview}
          </p>
          <h4 className="my-2">Duration: {info.detail.runtime} mins</h4>
          <Link to={`${pathname}/trailer`} className="inline-block my-4 px-4 py-2 bg-[#E50914] rounded text-white">
            Watch Trailer
          </Link>
        </div>
      </div>
      <div className="py-10 flex items-center justify-evenly">
        <div className="mx-20  flex items-center gap-4 border-[1px] bg-zinc-900 border-zinc-700 px-4 py-4 rounded-full">
          Available Buy :{" "}
          {info && info.watchProviders && info.watchProviders.buy ? info.watchProviders.buy.map((f, i) => (
            <img key={i} className="h-10 w-10 object-cover outline-none rounded-full border-[1px] border-white "
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
        <div className="mx-20  flex items-center gap-4 border-[1px] bg-zinc-900 border-zinc-700 px-4 py-4 rounded-full">
          Available On Rent :{" "}
          {info && info.watchProviders && info.watchProviders.rent ? info.watchProviders.rent.map((f, i) => (
            <img key={i} className="h-10 w-10 object-cover outline-none rounded-full border-[1px] border-white "
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
        <div className="mx-20  flex items-center gap-4 border-[1px] bg-zinc-900 border-zinc-700 px-4 py-4 rounded-full">
          Available Platforms :{" "}
          {info && info.watchProviders && info.watchProviders.flatrate ? info.watchProviders.flatrate.map((f, i) => (
            <img key={i} className="h-10 w-10 object-cover outline-none rounded-full border-[1px] border-white "
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
        <div className="h-[60vh] pb-20 w-full overflow-y-hidden  px-10">
          <h1 className="text-2xl font-bold py-4">Seasons</h1>
          <div className="relative w-full h-full  overflow-x-auto overflow-y-hidden flex gap-4 shrink-0 flex-nowrap py-5">
                {info.detail.seasons.length > 0 ? info.detail.seasons.map((b, i) => (
                    <Link to={`/${b.media_type}/${b.media_type}details/${b.id}`} key={b.id}
                    
                        className="h-[100%] min-w-[20%] bg-zinc-900 block rounded-lg border-none outline-none overflow-hidden"
                    >
                        <div className="h-[50%] w-full bg-zinc-400"  style={{
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
                        <h1 className="h-10 text-md font-bold text-zinc-100 my-1">
                                {b.original_name ||
                                    b.name ||
                                    b.original_title ||
                                    b.title}
                            </h1>
                            <p className="h-8 text-sm font-regular text-zinc-400 w-[80%] my-2 leading-none">
                                {b.overview ? b.overview.slice(0,30) :"No Info"}...
                                <span className="text-[#E50914]">more</span>
                            </p>
                            <span className="my-2 px-4 py-2 bg-[#E50914] rounded text-white text-xs ">
                                Watch Trailer
                            </span>
                        </div>
                    </Link>
                )):<h1 className="text-4xl text-white font-bold mt-4">Nothing to show dude</h1>}
            </div>
        </div>
        <div className="h-[60vh] pb-20 w-full overflow-y-hidden  px-10">
          <h1 className="text-2xl font-bold py-4">Recommendations & Similarities</h1>
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
