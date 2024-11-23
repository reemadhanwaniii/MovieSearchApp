import { useContext, useState } from 'react';
import './Navbar.css';
import { useMovieList } from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons'
import ThemeContext from '../../Context/ThemeContext';


function Navbar() {
    const [isAutoCompleteVisible,setIsAutoCompleteVisible] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');
    const {movieList} = useMovieList(searchTerm);
    const navigator = useNavigate();
    const {theme,setTheme} = useContext(ThemeContext)


    function handleAutoCompleteClick(e,imdbID) {
        console.log("onMouseDown ",e.target,imdbID);
        navigator(`/movie/${imdbID}`)
    }

    return(
        <div className="navbar-wrapper">
            <div className='movie-base-title'>
                <Link to={`/`}>
                    Movie Base
                </Link>
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
                             <div onMouseDown={(e) => handleAutoCompleteClick(e, movie.imdbID)} 
                                                key={movie.imdbID} className='autocomplete-result'>
                                                    {movie.Title}
                             </div>)
                    }
                </div>
            </div>
            <div onClick={() => setTheme((theme === 'dark')?'light':'dark')}>
                <FontAwesomeIcon className='theme-icon' icon={(theme === 'dark')?faSun:faMoon}/>
            </div>
        </div>
    )
}

export default Navbar;