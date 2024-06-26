import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../Store/actions/personActions";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "../Loading";
import Horizantal from "../../Horizantal";
import DropDown from "../../DropDown";
import { useState } from "react";

const PersonDetails = () => {
  const [categary, setcategary] = useState("movie");
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.person);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id, categary]);
  return info ? (
    <div className="sm:px-10 px-5  min-sm:h-screen overflow-x-hidden  overflow-y-auto  max-sm:w-[100vw] sm:overflow-x-hidden bg-black">
      <nav className="sm:w-full w-full py-5  px-2 sm:px-0 flex items-center justify-start gap-10  sm:overflow-hidden">
        <Link onClick={() => navigate(-1)}>
          <i className="text-xl hover:text-[#E50914] cursor-pointer sm:text-lg font-semibold ri-arrow-left-line"></i>
        </Link>

      </nav>
      <div className="flex flex-col sm:flex-row gap-10 items-start py-10 px-4 sm:px-0  ">
        <div className="sm:min-h-[100vh]  sm:w-[30%] border-r-[1px] border-zinc-800 pr-24  sm:overflow-y-auto scroll-smooth    ">
          <img
            className="sm:h-[40vh] h-[50vh] w-[80vw]  sm:-w-full object-cover mb-4 drop-sm:shadow-[4px_4px_30px_red] rounded-md"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <span className="border-none outline-none sm:h-[1px]">
            <hr />
          </span>
          <div className="flex items-center justify-center gap-10 my-4 text-lg sm:text-lg ">
            {info.externalId.instagram_id && (
              <a
                target="_blank"
                href={`https://www.instagram.com/${info.externalId.instagram_id}`}
              >
                <i className="hover:text-[#E50914] cursor-pointer sm:text-lg font-semibold ri-instagram-fill"></i>
              </a>
            )}

            {info.externalId.instagram_id && (
              <a
                target="_blank"
                href={`https://www.tiktok.com/${info.externalId.tiktok_id}`}
              >
                <i className="hover:text-[#E50914] cursor-pointer sm:text-lg font-semibold ri-tiktok-fill"></i>
              </a>
            )}
            {info.externalId.instagram_id && (
              <a
                target="_blank"
                href={`https://www.facebook.com/${info.externalId.facebook_id}`}
              >
                <i className="hover:text-[#E50914] cursor-pointer sm:text-lg font-semibold ri-facebook-fill"></i>
              </a>
            )}
            {info.externalId.instagram_id && (
              <a
                target="_blank"
                href={`https://www.twitter.com/${info.externalId.twitter_id}`}
              >
                <i className="hover:text-[#E50914] cursor-pointer sm:text-lg font-semibold ri-twitter-fill"></i>
              </a>
            )}

            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.detail.wikidata_id}`}
            >
              <i className="hover:text-[#E50914] cursor-pointer sm:text-lg font-semibold ri-global-fill"></i>
            </a>
          </div>
          <div className="flex flex-col gap-4 sm:text-zinc-400 text-zinc-400 ">
            <h2 className="sm:text-xl font-semibold">Person Info</h2>
            {info.detail.known_for_department && (
              <h3>Known For : {info.detail.known_for_department} </h3>
            )}
            {info.detail.gender && (
              <h3>
                Gender : {info.detail.gender % 2 === 0 ? "Male" : "Female"}{" "}
              </h3>
            )}
            {info.detail.place_of_birth && (
              <h3>Place-Of-Birth : {info.detail.place_of_birth}</h3>
            )}
            {info.detail.also_known_as && (
              <h3>
                Also Known As: {info.detail.also_known_as.map((g, i) => g)}
              </h3>
            )}
            {info.detail.birthday && (
              <h3>Birthday On : {info.detail.birthday} </h3>
            )}
            
                <h3>
                  Deathday :
                  {info.detail.deathday == null
                    ? " Still Alive "
                    : info.detail.deathday}
                </h3>
              
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-col sm:flex-nowrap w-[80vw] sm:w-full" >
          <h1 className="sm:text-5xl my-4 text-3xl">{info.detail.name}</h1>
          <h1 className="sm:text-zinc-400 text-zinc-400">{info.detail.biography.slice(0, 297)}</h1>
          <div className="sm:h-[40vh] sm:w-[65vw] sm:my-20   py-10  sm:py-0 ">
            <h1 className="sm:text-xl sm:text-zinc-400 mb-4 sm:text-xl text-2xl">
              Well Known For{" "}
              <i className=" ml-2 sm:text-2xl sm:text-red-600 ri-sm:arrow-down-circle-fill"></i>
            </h1>
            <div className="sm:pl-4 pl-4">
            <Horizantal data={info.combinedcredits.cast} />
            </div>
          </div>
          <div className="sm:w-full flex items-center justify-between p-2 ">
            <h1 className="sm:text-xl text-2xl">{categary.toUpperCase()}</h1>
            <span className="sm:inline hidden">
            <DropDown
              title="Categary"
              options={["tv", "movie"]}
              fun={(e) => setcategary(e.target.value)}
            />
            </span>
          </div>
          <div className="sm:h-[40vh] max-h-[50vh] w-[80vw] overflow-y-auto sm:w-full my-4 drop-sm:shadow-[0px_0px_20px_red] rounded-md border-white border-[1px] outline-none sm:overflow-y-auto sm:overflow-x-hidden scroll-smooth ">
            {info &&
              info[categary + "credits"].cast.map((h, i) => (
                <Link
                  className=" sm:hover:text-red-600 px-4 py-4 block border-[1px] border-zinc-800"
                  key={h.id}
                  to={`/${categary}/${categary}details/${h.id}`}
                >
                  <h2>
                  <i className=" ri-arrow-right-line mr-2"></i>
                    {h.title || h.original || h.tile_name || h.original_name}
                  </h2>
                  {h.character && <h5 className="sm:text-xs sm:text-zinc-400 text-zinc-400 p-2">Character Name : {h.character}</h5>}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PersonDetails;
