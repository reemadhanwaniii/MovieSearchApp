function searchMovie(term) {
    return `https://omdbapi.com/?apiKey=${import.meta.env.VITE_API_KEY}&s=${term}`
}


export function searchMovieByID(imdbID) {
    return `https://omdbapi.com/?apiKey=${import.meta.env.VITE_API_KEY}&i=${imdbID}`
}
export default searchMovie;