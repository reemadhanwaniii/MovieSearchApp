

//components export
import MovieCard from "../Components/MovieCard/MovieCard";

//css export
import './Home.css';
import { useMovieList } from "../hooks/useMovieList";
import { useState } from "react";


function Home() {
   
    const {movieList} = useMovieList('harry','avengers','sibling');
    const [isListShown,setIsListShown] = useState(true);

    return(
        <>
            <div className="movie-card-wrapper">
               {isListShown && movieList.map((movie) => {
                    return <MovieCard 
                                key={movie.imdbID}
                                 
                                {...movie}
                            />
                    }
                )}
                {
                    !isListShown && <div> Movie Details</div>
                }
            </div>
            
        </>
    )
}

export default Home;