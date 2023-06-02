import React from "react";
import Search from "../components/Search";
import SeccionMovie from "../components/SeccionMovie";
import "./Home.css";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="home-container">
      <Search />
      <div className="movies-container">
        <SeccionMovie endponit={"/movie/now_playing"} title={"New"} />
        <SeccionMovie endponit={"/movie/upcoming"} title={"Coming Soon"} />
        <SeccionMovie endponit={"/movie/top_rated"} title={"Top movies"} />
        <SeccionMovie
          endponit={"/discover/movie"}
          endpoint2={"&with_genres=28"}
          title={"Action movies"}
        />
        <SeccionMovie
          endponit={"/trending/movie/week"}
          title={"Trending movies"}
        />
      </div>
      <Navbar/>
    </div>
  );
};

export default Home;
