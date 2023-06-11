import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import MovieDetails from "./screens/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie" element={<MovieDetails />} />
        <Route path="*" element={<p>NOT FOUND</p>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// return (
//   <div className='App'>
//     <MovieMain/>
//     <TopCastContainer/>
//     <BookingButton/>
//   </div>
// )
// const [peli,setPeli] = useState("");
// useEffect(()=>{
//   getMovies("Spider Man").then((data)=>setPeli(data))
// },[]);

// return (
//   <div className='App'>
//     <MovieMain peli={peli}/>
//     <TopCastContainer pelis={peli}/>
//     <BookingButton/>
//   </div>
// )
