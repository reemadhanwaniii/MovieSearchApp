import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovieByID } from "../apis/omdb";
import MovieCard from "../Components/MovieCard/MovieCard";

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
    },[]);

    return(
        <>
           {movie && <MovieCard {...movie}/>}
        </>
    )
}

export default MovieDetail;