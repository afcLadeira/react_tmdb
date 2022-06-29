import {
  useQueries,
} from "react-query";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { axiosFetch } from "./fetch";



export function useGetTvDetailsAndCredits(id, tvDetailsURL, tvCreditsURL) {

  const axiosPrivate = useAxiosPrivate();

  return useQueries([
    {
      queryKey: ["tvshow", id],
      queryFn: async () => axiosFetch(tvDetailsURL,axiosPrivate),
      enabled: false,
    },
    {
      queryKey: ["tvshow_credits", id],
      queryFn: async () => axiosFetch(tvCreditsURL,axiosPrivate),
      enabled: false,
      select: (data) => {
        data.cast.sort((a, b) => b.popularity - a.popularity);
        return data;
      },
    },
  ]);
}