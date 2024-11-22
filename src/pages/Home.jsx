import MovieCard from "../Components/MovieCard/MovieCard";

function Home() {
    const movie={
        "Title": "Sibling Rivalry",
        "Year": "1990",
        "imdbID": "tt0100611",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ3NGVlMTQtMzA3MC00NDcxLTgyMmUtNmFkYTEzM2U0MTVmXkEyXkFqcGc@._V1_SX300.jpg"
      }
    return(
        <>
            <MovieCard 
                Title={movie.Title}
                Year={movie.Year}
                Type={movie.Type}
                Poster={movie.Poster}
            />
        </>
    )
}

export default Home;