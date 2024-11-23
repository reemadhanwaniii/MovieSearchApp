import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieByID } from "../apis/omdb";
import MovieCard from "../Components/MovieCard/MovieCard";
import './MovieDetail.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


function MovieDetail() {

    const [movie,setMovie] = useState(null);
    const {id} = useParams();

    async function downloadMovie() {
        const response = await axios.get(searchMovieByID(id));
        console.log(response.data);
        setMovie(response.data);
    }

    useEffect(()=>{
        downloadMovie();
    },[id]);

    return(
        <div className="movie-detail-wrapper">
          {movie && <MovieCard {...movie} id={movie.imdbID}/>}
          {movie && <div className="movie-details">
            <div>
              Plot : {movie.Plot}
            </div>
            <div>
                Actors : {movie.Actors}
            </div>
            <div>
                Genre : {movie.Genre.split(',').map((genre)=> {
                    return <span  className="genre-name" key={genre}>{genre}</span>
                })}
            </div>
            <div>
             <Rating items={10} value={Math.floor(movie.imdbRating)} style={{ maxWidth: 250 }}/>
            </div>
         </div>
        }
        </div>
    )
}

export default MovieDetail;