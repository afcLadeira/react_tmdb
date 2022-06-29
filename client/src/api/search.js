import axios from "axios";
import {
  useQuery,
} from "react-query";
import useAxiosPrivate from "../hooks/useAxiosPrivate";




export function useSearchInfo(url, searchString, multi) {

  const axiosPrivate = useAxiosPrivate();

    return useQuery(
      ["results", searchString, multi],
      async () => {
        const { data } = await axiosPrivate.get(url);
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