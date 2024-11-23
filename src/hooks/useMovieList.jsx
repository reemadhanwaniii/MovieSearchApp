import { useState,useEffect } from "react";
import axios from "axios";
import searchMovie from "../apis/omdb";

export function useMovieList(...args) {
    
    const [movieList,setMovieList] = useState([]);

    async function downloadDefaultMovies(...args) {

        try {
            const urls = args.map((name) => searchMovie(name));
            const response = await axios.all(urls.map((url)=>axios.get(url)));
            if(response[0].data.Error){
                setMovieList([]);
            }else{
                const movies = response.map((res) => res.data.Search)
                setMovieList([].concat(...movies))
            }
           
        } catch (error) {
            console.log("API request failed");
        }
       
    }

    useEffect(()=>{
        downloadDefaultMovies(...args);
    },[...args]);


    return { movieList }
}