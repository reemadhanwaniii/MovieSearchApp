import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import Error from "../pages/Error";

function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/movie/:id" element={<MovieDetail />}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}

export default MainRoutes;