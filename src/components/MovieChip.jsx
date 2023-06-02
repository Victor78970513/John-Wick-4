import React from 'react'
import "./MovieChip.css"
const MovieChip = ({imagen}) => {
  const url = `https://image.tmdb.org/t/p/w500${imagen}`
  return (
    <div className='chip-movie'>
        <img src={url} alt="" />
    </div>
  )
}

export default MovieChip