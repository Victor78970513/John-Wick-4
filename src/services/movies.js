

export const getMovies = async(title) =>{
    const moviekey = import.meta.env.VITE_MOVIE_KEY
    // debugger
    const formatTitle = titlePlus(title)
    const apiURL = 'https://www.omdbapi.com/'
    const apiTitle = `${apiURL}?t=${formatTitle}&apikey=${moviekey}`
    console.log(apiTitle)
    const response = await fetch(apiTitle)
    const data = await response.json()
    return data;
}

const titlePlus =(title="")=>{
    const resultado = title.replace(' ','+')
    
    return resultado
}