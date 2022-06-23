import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetMovieCredits, useGetMovieDetails } from "../../api";
import Credits from "../../components/Credits";
import MovieDetails from "../../components/MovieDetails";
import MySpinner from "../../components/Spinner";
import {
  getMovieCreditsEndpoint,
  getMovieDetailsEndpoint,
} from "../../constants";

export default function Movie() {
  let { id } = useParams();


  //DEPENDENT QUERIES
  const { data, error, isLoading } = useGetMovieDetails(
    getMovieDetailsEndpoint(id),
    id
  );

  const {
    data: credits,
    error: error_credits,
    isLoading: isLoading_credits,
  } = useGetMovieCredits(getMovieCreditsEndpoint(id), id, data);


  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  if (isLoading) {
    return <MySpinner></MySpinner>;
  }

  return (
    <>
      {data && <MovieDetails data={data}></MovieDetails>}
      {credits && <Credits credits={credits}></Credits>}
    </>
  );
}




//deprecated
export function MovieOld() {
  let { id } = useParams();

  const [state, setState] = useState({
    loading: true,
    data: null,
    credits: null,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(getMovieDetailsEndpoint(id));

      const { data: credits } = await axios.get(getMovieCreditsEndpoint(id));

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
