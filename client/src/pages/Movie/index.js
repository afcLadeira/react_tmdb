import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Credits from "../../components/Credits";
import MovieDetails from "../../components/MovieDetails";
import MySpinner from "../../components/Spinner";

export default function Movie() {
  let { id } = useParams();
  const [state, setState] = useState({
    loading: true,
    data: null,
    credits: null,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
      let urlCredits = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;

      const { data } = await axios.get(url);
     
      const { data: credits } = await axios.get(urlCredits);
     
      setState((prevState) => ({
        ...prevState,
        loading: false,
        data,
        credits,
      }));
    }

    fetchData();
  }, [id]);

  if (state.loading) {
    return <MySpinner></MySpinner>;
  }

  return (
    <>
      {state.data && <MovieDetails data={state.data}></MovieDetails>}
      {state.credits && <Credits credits={state.credits}></Credits>}
    </>
  );
}
