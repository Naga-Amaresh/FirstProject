import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../Store/actions/movieActions";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading";
import Horizantal from "../../Horizantal";

const MovieDetails = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
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
        {info.detail.imdb_id &&<a
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
            {info.detail.original_title ||  info.detail.original_name}
          </h1>
          <h4>Release-Date: {info.detail.release_date}</h4>
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
          Available Buy :
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
          <div className="h-[60vh] w-full overflow-hidden px-10">
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

export default MovieDetails;
