import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import PersistLogin from "../components/PersistLogin";
import RequireAuth from "../components/RequireAuth";
import { FavoritesPage } from "../pages/Favorites";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Movie from "../pages/Movie";
import MyLists from "../pages/MyLists";
import Person from "../pages/Person";
import Register from "../pages/Register";
import Results from "../pages/Results";
import TVShow from "../pages/TVShow";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

   <Route element={<PersistLogin></PersistLogin>}>
        <Route element={<RequireAuth></RequireAuth>}>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
          <Route path="/mylists" element={<MyLists />}></Route>
          <Route path="results" element={<Results />}></Route>
          <Route path="movie" element={<Movie />}>
            <Route path=":id" element={<Movie />} />
          </Route>
          <Route path="tvshow" element={<TVShow />}>
            <Route path=":id" element={<TVShow />} />
          </Route>
          <Route path="person" element={<Person />}>
            <Route path=":id" element={<Person />} />
          </Route>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Route>
   </Route>
    </Routes>

    //   <Routes>
    //   <Route path="/login" element={<Login />}></Route>
    //   <Route path="/register" element={<Register />}></Route>

    // <Route element={<RequireAuth></RequireAuth>}>
    //   <Route path="/favorites" element={<FavoritesPage />}></Route>
    //   <Route path="results" element={<Results />}>
    //   </Route>
    //   <Route path="movie" element={<Movie />}>
    //      <Route path=":id" element={<Movie />} />
    //   </Route>
    //   <Route path="tvshow" element={<TVShow />}>
    //      <Route path=":id" element={<TVShow />} />
    //   </Route>
    //   <Route path="person" element={<Person />}>
    //      <Route path=":id" element={<Person />} />
    //   </Route>
    //   <Route path="/" element={<Home />}></Route>
    //   </Route>
    // </Routes>
  );
}
