
import React from 'react'
import { Gender } from './Gender'
import movie from '../assets/movie.json'
import './MovieMain.css'

const MovieMain = () => {
  return (
    <div className='movie-main-container'>
        <img src={movie.imgsrce} alt="" />
        <Gender movie={movie}/>
        <span>{movie.resume}</span>
    </div>
  )
}

export default MovieMain