import { useQuery } from "@tanstack/react-query"
import { postsService } from "../services/posts.api";

export const usePostById = (id: number) => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => postsService.getPostById(id),
    select: (data) => data.data,
    enabled: !!id
  });

  return { post: data, isError, isLoading, isSuccess }
}