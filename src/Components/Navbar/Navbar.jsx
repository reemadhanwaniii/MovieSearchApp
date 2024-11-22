import { useRef, useState } from 'react';
import './Navbar.css';

function Navbar() {

   //const resultListRef = useRef(null);
    const [isAutoCompleteVisible,setIsAutoCompleteVisible] = useState(false);

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
                       // resultListRef.current.style.display = 'block';
                       setIsAutoCompleteVisible(true);
                    }}
                    onBlur={() =>{
                        //resultListRef.current.style.display = 'none';
                        setIsAutoCompleteVisible(false);
                    }}
                    placeholder='What movie you are thinking about...?'
                />
                <div id="result-list" style={{display: (isAutoCompleteVisible)?'block':'none'}}>
                    <div className='autocomplete-result'>result 1</div>
                    <div className='autocomplete-result'>result 2</div>
                    <div className='autocomplete-result'>result 3</div>
                </div>
            </div>
            <div>
                Theme
            </div>
        </div>
    )
}

export default Navbar;