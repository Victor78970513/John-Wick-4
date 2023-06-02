import React, { useEffect, useState } from "react";
import { getMoviesBySection } from "../services/movies";
import MovieChip from "./MovieChip";
import "./SeccionMovie.css";
import { useNavigate } from "react-router-dom";


const SeccionMovie = ({endponit,endpoint2, title}) => {
  const navigate = useNavigate();
  const handleClick = (path) =>{
    navigate(path);
  }
  const [peli, setPeli] = useState([]);
  useEffect(() => {
    const peliculas = async () =>{
      const data = await getMoviesBySection({endpoint:endponit,endpoint2:endpoint2});
      setPeli(data.results)
    };
    peliculas();
  }, []);
  return <div>
    <h3>{title}</h3>
    {
      <div className="section-container">
        {
          peli.map((movie) =>(
             <div key={movie.id} onClick={() => {
              // console.log(movie.id);
              // console.log(movie.poster_path);
              // console.log(movie.overview);
              handleClick(`/movie?imagen=${movie.poster_path}&descripcion=${movie.overview}&actores=${movie.cast}&id=${movie.id}`)
            }}>
              <MovieChip key={movie.id} imagen={movie.poster_path}/>
            </div>
          ))
        }
      </div>
    }
  </div>;
};

export default SeccionMovie;
