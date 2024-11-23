

//components export
import MovieCard from "../Components/MovieCard/MovieCard";

//css export
import './Home.css';
import { useMovieList } from "../hooks/useMovieList";



function Home() {
   
    const {movieList} = useMovieList('harry','avengers','sibling');
   

    return(
        <>
            <div className="movie-card-wrapper">
               {movieList.map((movie) => {
                    return <MovieCard 
                                key={movie.imdbID}
                                {...movie}
                            />
                    }
                )}
                
            </div>
            
        </>
    )
}

export default Home;