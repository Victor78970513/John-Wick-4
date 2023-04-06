
import React from 'react'
import { ActorCard } from './ActorCard'

const TopCastContainer = () => {
  return (
    <section className='top-cast-container'>
        <h6>Top Cast</h6>
        <div className='cards-container'>
          <ActorCard />
        </div>
    </section>
  )
}