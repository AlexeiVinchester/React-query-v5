import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { TPost } from "../types/post.type";
import { postsService } from "../services/posts.api";


const initialData: TPost[] = [{
  id: 0,
  userId: 0,
  title: 'Initial title',
  body: ''
}];

export const usePosts = (enabled: boolean) => {
  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: postsService.getPosts,
    enabled: enabled,
    initialData: initialData
  })

  useEffect(() => {
    if (isSuccess) console.log('Data were loaded successfully!')
  }, [isSuccess]);

  useEffect(() => {
    if (isError) console.log('Something went wrong!')
  }, [isError]);

  return { data, isLoading, isSuccess };
};

