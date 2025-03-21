import { useQuery } from "@tanstack/react-query"
import { getPostById } from "../services/getPosts"

export const usePostById = (id: number) => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPostById(id),
    select: (data) => data.data,
    enabled: !!id
  });

  return { post: data, isError, isLoading, isSuccess }
}