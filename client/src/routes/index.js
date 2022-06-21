import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Person from "../pages/Person";
import Results from "../pages/Results";
import TVShow from "../pages/TVShow";


export default function Router() {

    return (
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="results" element={<Results />}>
        </Route>
        <Route path="movie" element={<Movie />}>
           <Route path=":id" element={<Movie />} />
        </Route>
        <Route path="tvshow" element={<TVShow />}>
           <Route path=":id" element={<TVShow />} />
        </Route>
        <Route path="person" element={<Person />}>
           <Route path=":id" element={<Person />} />
        </Route>
      </Routes>
    )
}