import React, { useEffect, useState } from "react";
import { Chip } from "./Chip";
import './Gender.css'
import { getGenresByMovie } from "../services/movies";
export const Gender = ({ Idpelicula }) => {
  const [generos,setGeneros] = useState([]);
  useEffect(() => {
    const genres = async () =>{
      const data = await getGenresByMovie(Idpelicula);
      setGeneros(data.genres)
    };
    genres();
  }, []);
  return (
    <div className="gender-container">
      {generos.map((genero,index) => (
        <Chip nombregenero={genero.name} key={index}/>
      ))}
    </div>
  );
};
