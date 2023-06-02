export const getMovies = async(title) =>{
    const moviekey = import.meta.env.VITE_MOVIE_KEY
    // debugger
    const formatTitle = titlePlus(title)
    const apiURL = 'https://www.omdbapi.com/'
    const apiTitle = `${apiURL}?t=${formatTitle}&apikey=${moviekey}`
    console.log(apiTitle)
    const response = await fetch(apiTitle)
    const data = await response.json()
    return data;}
const titlePlus =(title="")=>{
    const resultado = title.replace(' ','+')   
    return resultado;}
export const getMoviesBySection = async({endpoint,endpoint2 = ''})=>{
    const moviekey = import.meta.env.VITE_MOVIE_DB_KEY
    const apiURL = 'https://api.themoviedb.org/3';
    const url = `${apiURL}/${endpoint}?api_key=${moviekey}${endpoint2}`;
    const response = await fetch(url)
    const data = await response.json()
    return data;
}
export const getActorsMovie = async(movieId) =>{
    const moviekey = import.meta.env.VITE_MOVIE_DB_KEY
    const baseURL = 'https://api.themoviedb.org/3/movie'
    const url = `${baseURL}/${movieId}/credits?api_key=${moviekey}`
    const response = await fetch(url)
    const data = await response.json()
    return data;
}
export const getGenresByMovie = async(movieId) => {
    const moviekey = import.meta.env.VITE_MOVIE_DB_KEY
    const baseURL = 'https://api.themoviedb.org/3/movie/'
    const url = `${baseURL}${movieId}?api_key=${moviekey}`
    console.log(`ID: ${url}`)
    const response = await fetch(url)
    const data = await response.json()
    return data
}