import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";

function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/movie/:name" element={<MovieDetail />}/>
        </Routes>
    )
}

export default MainRoutes;