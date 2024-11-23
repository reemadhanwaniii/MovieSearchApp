import { useState } from 'react';
import './Navbar.css';
import { useMovieList } from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isAutoCompleteVisible,setIsAutoCompleteVisible] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');
    const {movieList} = useMovieList(searchTerm);


    function handleAutoCompleteClick(e,imdbID) {
        console.log("onMouseDown ",e.target,imdbID);
        //e.stopPropagation();
    }

    return(
        <div className="navbar-wrapper">
            <div>
                Movie Base
            </div>
            <div className="search-bar">
                <input 
                    id="movie-search-input"
                    type="text" 
                    onFocus={() =>{
                       setIsAutoCompleteVisible(true);
                    }}
                    onBlur={(e) =>{
                        console.log(e.target);
                        setIsAutoCompleteVisible(false);
                    }}
                    onChange={useDebounce((e) => {
                        setSearchTerm(e.target.value);
                    })}
                    placeholder='What movie you are thinking about...?'
                />
                <div id="result-list" style={{display: (isAutoCompleteVisible)?'block':'none'}}>
                    <div className='autocomplete-result'>Autocomplete results ....{searchTerm}</div>
                    {
                        movieList.length > 0 &&
                        movieList.map((movie)=> 
                            <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}> 
                             <div onMouseDown={(e) => handleAutoCompleteClick(e, movie.imdbID)} 
                                  className='autocomplete-result'>
                                                    {movie.Title}
                             </div>
                            </Link>
                            )
                    }
                </div>
            </div>
            <div>
                Theme
            </div>
        </div>
    )
}

export default Navbar;