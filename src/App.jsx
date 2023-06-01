import  MovieMain  from './components/MovieMain'
import './App.css'
import { TopCastContainer } from './components/TopCastContainer'
import { BookingButton } from './components/BookingButton'
import { useEffect, useState } from 'react'
import { getMovies } from './services/movies'

function App() {
  // return (
  //   <div className='App'>
  //     <MovieMain/>
  //     <TopCastContainer/>
  //     <BookingButton/>
  //   </div>
  // )
  const [peli,setPeli] = useState("");
  useEffect(()=>{
    getMovies("Spider Man").then((data)=>setPeli(data))
  },[]);

  return (
    <div className='App'>
      <MovieMain peli={peli}/>
      <TopCastContainer pelis={peli}/>
      <BookingButton/>
    </div>
  )
}

export default App
