import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getPosts } from "../services/getPosts";
import { TPost } from "../types/post.type";


const initialData: { data: TPost[] } = {
  data: [{
    id: 0,
    userId: 0,
    title: 'Initial title',
    body: ''
  }]
}

export const usePosts = (enabled: boolean) => {
  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    select: (data) => data.data,
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

