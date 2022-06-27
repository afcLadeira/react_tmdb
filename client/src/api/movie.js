import axios from "axios";
import {
  useQuery,
} from "react-query";





export function useGetMovieDetails(url, id) {
  return useQuery(["movie", id], async () => {
    const { data } = await axios.get(url);
    return data;
  });
}

export function useGetMovieCredits(url, id, details) {
  return useQuery(
    ["movie_credits", id],
    async () => {
      const { data } = await axios.get(url);
      return data;
    },
    { enabled: !!details }
  );
}