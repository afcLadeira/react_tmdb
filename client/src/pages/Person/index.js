import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAllPersonInfo } from "../../api/person";
import PersonCredits from "../../components/PersonCredits";
import PersonDetails from "../../components/PersonDetails";
import MySpinner from "../../components/Spinner";
import {
  getPersonDetailsEndpoint,
  getPersonMovieCreditsEnpoint,
  getPersonTVCreditsEnpoint,
} from "../../constants";

export default function Person() {
  let { id } = useParams();

  const [{ isLoading, data }, { data: tv_credits }, { data: movie_credits }] =
    useGetAllPersonInfo(
      id,
      getPersonDetailsEndpoint(id),
      getPersonTVCreditsEnpoint(id),
      getPersonMovieCreditsEnpoint(id)
    );

  if (isLoading) {
    return <MySpinner></MySpinner>;
  }

  return (
    <>
      {data && <PersonDetails data={data}></PersonDetails>}
      {movie_credits && (
        <PersonCredits credits={movie_credits} type="movie"></PersonCredits>
      )}
      {tv_credits && (
        <PersonCredits credits={tv_credits} type="tv"></PersonCredits>
      )}
    </>
  );
}

//deprecated
export function PersonOLD() {
  let { id } = useParams();

  const [state, setState] = useState({
    loading: true,
    data: null,
    tv_credits: null,
    movie_credits: null,
    error: null,
  });

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(getPersonDetailsEndpoint(id));

      const { data: tv_credits } = await axios.get(
        getPersonTVCreditsEnpoint(id)
      );

      const { data: movie_credits } = await axios.get(
        getPersonMovieCreditsEnpoint(id)
      );

      setState((prevState) => ({
        ...prevState,
        loading: false,
        data,
        movie_credits,
        tv_credits,
      }));
    }

    fetchData();
  }, [id]);

  if (state.loading) {
    return <MySpinner></MySpinner>;
  }

  return (
    <>
      <PersonDetails data={state.data}></PersonDetails>
      <PersonCredits credits={state.movie_credits} type="movie"></PersonCredits>
      <PersonCredits credits={state.tv_credits} type="tv"></PersonCredits>
    </>
  );
}
