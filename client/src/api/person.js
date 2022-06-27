import {
  useQueries,
} from "react-query";
import { axiosFetch } from "./fetch";



export function useGetAllPersonInfo(
  id,
  detailsURL,
  tvCreditsURL,
  movieCreditsURL
) {
  return useQueries([
    {
      queryKey: ["person", id],
      queryFn: async () => axiosFetch(detailsURL),
    },
    {
      queryKey: ["person_tv_credits", id],
      queryFn: async () => axiosFetch(tvCreditsURL),
    },
    {
      queryKey: ["person_movie_credits", id],
      queryFn: async () => axiosFetch(movieCreditsURL),
    },
  ]);
}