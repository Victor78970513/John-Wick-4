import React from 'react';
import MovieMain from '../components/MovieMain';
import { useLocation } from 'react-router-dom';
import { TopCastContainer } from '../components/TopCastContainer';
const MovieDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const posterImage = searchParams.get("imagen")
  const descripcion = searchParams.get("descripcion")
  const movieId = searchParams.get("id")
  // const movieId = 385687;
  console.log(`este es el ID: ${movieId}`)
  return (
    <div className='movie-details-container'>
        <MovieMain peli={posterImage} descripcion={descripcion} id={movieId}/>
        <TopCastContainer pelicula={movieId}/>
    </div>
  )
}

export default MovieDetails
// const generos = searchParams.get("generos")