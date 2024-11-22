import { useEffect, useState } from "react";
import axios from "axios";
import searchMovie from "../apis/omdb";

//components export
import MovieCard from "../Components/MovieCard/MovieCard";

//css export
import './Home.css';


function Home() {
   
    const [movieList,setMovieList] = useState([]);

    async function downloadDefaultMovies(...args) {
        //console.log(args);
        const urls = args.map((name) => searchMovie(name));
        //console.log(urls);
        const response = await axios.all(urls.map((url)=>axios.get(url)));
        //console.log(response);
        const movies = response.map((res) => res.data.Search)
        //console.log(movies);
        setMovieList([].concat(...movies))
    }

    useEffect(()=>{
        downloadDefaultMovies('harry','avengers');
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