import axios from "axios";
import {
  useInfiniteQuery,
} from "react-query";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const fetchPopular = async (url, pageParam = 1 ,axiosPrivate) => {
  const { data } = await axiosPrivate.get(url + "?page=" + pageParam);
  return {
    ...data,
    nextPage: data.total_pages === data.page ? undefined : data.page + 1,
  };
};

export function useGetMostPopular(url) {

  const axiosPrivate = useAxiosPrivate();


  return useInfiniteQuery(
    "movies",
    ({ pageParam = 1 }) => fetchPopular(url, pageParam , axiosPrivate),
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.nextPage;
      },
    },
    { staleTime: Infinity }
  );
}
