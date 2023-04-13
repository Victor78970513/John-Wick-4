import  MovieMain  from './components/MovieMain'
import './App.css'
import { TopCastContainer } from './components/TopCastContainer'
import { BookingButton } from './components/BookingButton'

function App() {

  return (
    <div className='App'>
      <MovieMain/>
      <TopCastContainer/>
      <BookingButton/>
    </div>
  )
}

export default App
