
import React from 'react'
import { Gender } from './Gender'
import movie from '../assets/movie.json'
import './MovieMain.css'

const MovieMain = ({peli}) => {
  return (
    <div className='movie-main-container'>
        {/* <img src={movie.imgsrce} alt="" />
        <Gender movie={movie}/>
        <span>{movie.resume}</span> */}
        <img src={peli.Poster} alt="" />
        <Gender peli={peli}/>
        <span>
          {peli.Plot}
        </span>
    </div>
  )
}

export default MovieMain