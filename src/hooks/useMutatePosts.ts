import { QueryClient, useMutation } from "@tanstack/react-query";
import { postsService } from "../services/posts.api";
import { TPost } from "../types/post.type";

export const useMutatePosts = (queryClient: QueryClient) => {
  const { mutate, isPending: isPendingCreation } = useMutation({
    mutationKey: ['new post'],
    mutationFn: postsService.createNewPost,
    onSuccess: (post) => {
      queryClient.setQueriesData<TPost[]>(
        { queryKey: ['posts'] },
        (posts) => {
          return [...(posts || []), post]
        })
    }
  });

  const handleClickCreateNewPost = () => {
    mutate({
      userId: 1,
      title: 'new post',
      body: 'www'
    })
  };

  return { isPendingCreation, handleClickCreateNewPost }
};