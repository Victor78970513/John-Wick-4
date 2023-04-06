
import React from 'react'
import { Gender } from './Gender'
import movie from '../assets/movie.json'

const MovieMain = () => {
  return (
    <div>
        <img src={movie.imgsrce} alt="" />
        <Gender movie={movie}/>
        <span>{movie.resume}</span>
    </div>
  )
}

export default MovieMain