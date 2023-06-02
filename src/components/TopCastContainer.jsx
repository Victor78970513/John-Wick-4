import React, { useEffect } from 'react'
import { ActorCard } from './ActorCard'
import './TopCastContainer.css'
import { useState } from 'react';
import { getActorsMovie } from '../services/movies';
import { BookingButton } from './BookingButton';

export const TopCastContainer = ({pelicula}) => {
  const [actores, setActores] = useState([]);
  useEffect(() => {
    const actoresPeli = async () =>{
      const data = await getActorsMovie(pelicula)
      setActores(data.cast)
    };
    actoresPeli();
  }, []);
  console.log(`TOPCASTCONTAINER: ${pelicula}`)
  return (
    <section className='top-cast-container'>
        <h6>Top Cast</h6>
        <div className='cards-container'>
          {
            actores.map((actor,index)=>{
              return (<ActorCard actorImage={actor.profile_path} key={index}/>)    
            })
          }
        </div>
        <BookingButton/>
    </section>
  )
}