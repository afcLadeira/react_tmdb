import axios from "axios";
import {
  useQuery,
} from "react-query";




export function useSearchInfo(url, searchString, multi) {
    return useQuery(
      ["results", searchString, multi],
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