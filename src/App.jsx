import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Partials/Trending";
import TvShows from "./components/Partials/TvShows";
import Popular from "./components/Partials/Popular";
import Movies from "./components/Partials/Movies";
import ContactUs from "./ContactUs";
import About from "./About";
import MovieDetails from "./components/Partials/MovieDetails";
import TvDetails from "./components/Partials/TvDetails";
import PersonDetails from "./components/Partials/PersonDetails";
import Trailer from "./components/Partials/Trailer";
import PageNotFound from "./components/PageNotFound";
import Person from "./components/Partials/Person";

const App = () => {
  return (
    <div
      className="w-full h-screen bg-[#000000] text-[#FFFFFF]
      "
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/moviedetails/:id" element={<MovieDetails />}>
          <Route path="/movie/moviedetails/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/tvdetails/:id" element={<TvDetails />} >
        <Route path="/tv/tvdetails/:id/trailer" element={<Trailer/>} />

        </Route>
        <Route path="/person" element={<Person />} />
        <Route path="/person/persondetails/:id" element={<PersonDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
