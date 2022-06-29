import axios from "axios";
import {
  useQuery,
} from "react-query";
import useAxiosPrivate from "../hooks/useAxiosPrivate";





export function useGetMovieDetails(url, id) {

  const axiosPrivate = useAxiosPrivate()

  return useQuery(["movie", id], async () => {
    const { data } = await axiosPrivate.get(url);
    return data;
  });
}

export function useGetMovieCredits(url, id, details) {
  const axiosPrivate = useAxiosPrivate()

  return useQuery(
    ["movie_credits", id],
    async () => {
      const { data } = await axiosPrivate.get(url);
      return data;
    },
    { enabled: !!details }
  );
}