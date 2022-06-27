import {
  useQueries,
} from "react-query";
import { axiosFetch } from "./fetch";



export function useGetTvDetailsAndCredits(id, tvDetailsURL, tvCreditsURL) {
  return useQueries([
    {
      queryKey: ["tvshow", id],
      queryFn: async () => axiosFetch(tvDetailsURL),
      enabled: false,
    },
    {
      queryKey: ["tvshow_credits", id],
      queryFn: async () => axiosFetch(tvCreditsURL),
      enabled: false,
      select: (data) => {
        data.cast.sort((a, b) => b.popularity - a.popularity);
        return data;
      },
    },
  ]);
}