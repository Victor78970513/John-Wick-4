import React from "react";
import { Gender } from "./Gender";
import "./MovieMain.css";
import generos from "../assets/movie.json";
const MovieMain = ({peli,descripcion,id}) => {
  const url = `https://image.tmdb.org/t/p/w500${peli}`
  console.log(url);
  return (
    <div className="movie-main-container">
      <img src={url} alt="" />
      <Gender Idpelicula={id}/>
      <span>{descripcion}</span>
    </div>
  );
};

export default MovieMain;
// <div className='movie-main-container'>
//   <img src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`} alt="" />
//   <Gender peli={peli.genres}/>
//   <span>{peli.overview}</span>
// </div>

// <div className='movie-main-container'>
//     <img src={peli.Poster} alt="" />
//     <Gender peli={peli}/>
//     <span>
//       {peli.Plot}
//     </span>
// </div>
