import { useQuery, useMutation, useQueryClient } from "react-query";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export function useGetMyLists(url, userId) {
  const axiosPrivate = useAxiosPrivate();

  return useQuery(
    "mylists",
    async () => {
      const { data } = await axiosPrivate.get(url);
      return data;
    },
    { enabled: !!userId }
  );
}

export const useCreateList = () => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  return useMutation(
    async ({ url, list }) => {
      if (!url) return [];
      const { data } = await axiosPrivate.post(url, list);
      return data;
    },
    {
      onSuccess: (data, variables) => {
        // queryClient.setQueryData(['mylists', { id: variables.id }], data)
        queryClient.invalidateQueries("mylists");
      },
    }
  );
};
export const useDeleteList = () => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  return useMutation(
    async (url) => {
      if (!url) return [];
      const { data } = await axiosPrivate.delete(url);
      return data;
    },
    {
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries("mylists");
      },
    }
  );
};
export const useAddMovieToList = () => {
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosPrivate();

  return useMutation(
    async ({ url, movie }) => {
      if (!url) return [];
      const { data } = await axiosPrivate.put(url, movie);
      return data;
    },
    {
      onSuccess: (data, variables , onSuccess) => {
        // queryClient.setQueryData(['mylists', { id: variables.id }], data)
        queryClient.invalidateQueries("mylists");
      },
    }
  );
};
