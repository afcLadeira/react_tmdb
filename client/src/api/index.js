import axios from "axios";
import { useQueries, useQuery } from "react-query";

export function useGetMostPopular(url) {
  return useQuery(
    "movies",
    async () => {
      const { data } = await axios.get(url);
      return data;
    },
    { staleTime: Infinity },
    {
      select: (data) => {
        data.results.sort((a, b) => b.popularity - a.popularity);
        return data;
      },
    }
  );
}
export function useSearchInfo(url , searchString , multi) {
  return useQuery(
    ["results",searchString , multi] ,
    async () => {
      const { data } = await axios.get(url);
      return data;
    },
    { enabled: !!url },
    {
      select: (data) => {
        data.results.sort((a, b) => b.popularity - a.popularity);
        return data;
      },
    }
  );
}

export function useGetMovieDetails(url, id) {
  //useMutation para on demand? ou refetch?

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

export const axiosFetch = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
