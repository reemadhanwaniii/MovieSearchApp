function searchMovie(term) {
    return `https://omdbapi.com/?apiKey=${import.meta.env.VITE_API_KEY}&s=${term}`
}

export default searchMovie;