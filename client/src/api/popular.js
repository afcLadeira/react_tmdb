import axios from "axios";
import {
  useInfiniteQuery,
} from "react-query";

const fetchPopular = async (url, pageParam = 1) => {
  const { data } = await axios.get(url + "&page=" + pageParam);
  return {
    ...data,
    nextPage: data.total_pages === data.page ? undefined : data.page + 1,
  };
};

export function useGetMostPopular(url) {
  return useInfiniteQuery(
    "movies",
    ({ pageParam = 1 }) => fetchPopular(url, pageParam),
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.nextPage;
      },
    },
    { staleTime: Infinity }
  );
}
