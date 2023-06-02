import React from 'react'
import './ActorCard.css'

export const ActorCard = ({actorImage}) => {
  const image = `https://image.tmdb.org/t/p/w500${actorImage}`
  return (
    <div className='actor-container'>
      <img src={image} alt="" />
      {/* <span>{actor.name}</span> */}
    </div>
  )
}