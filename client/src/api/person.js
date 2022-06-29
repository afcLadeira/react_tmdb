import { useQueries } from "react-query";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { axiosFetch } from "./fetch";

export function useGetAllPersonInfo(
  id,
  detailsURL,
  tvCreditsURL,
  movieCreditsURL
) {
  const axiosPrivate = useAxiosPrivate();
  return useQueries([
    {
      queryKey: ["person", id],
      queryFn: async () => axiosFetch(detailsURL, axiosPrivate),
    },
    {
      queryKey: ["person_tv_credits", id],
      queryFn: async () => axiosFetch(tvCreditsURL, axiosPrivate),
    },
    {
      queryKey: ["person_movie_credits", id],
      queryFn: async () => axiosFetch(movieCreditsURL, axiosPrivate),
    },
  ]);
}
