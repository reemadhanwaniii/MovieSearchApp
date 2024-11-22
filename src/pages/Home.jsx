import { useEffect, useState } from "react";
import axios from "axios";
import searchMovie from "../apis/omdb";

//components export
import MovieCard from "../Components/MovieCard/MovieCard";

//css export
import './Home.css';


function Home() {
   
    const [movieList,setMovieList] = useState([]);

    async function downloadDefaultMovies(movieName) {
        const response = await axios.get(searchMovie(movieName));
        console.log(response.data);
        setMovieList(response.data.Search)
    }

    useEffect(()=>{
        downloadDefaultMovies('harry');
    },[]);

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