import { useMutation, useQueryClient } from '@tanstack/react-query';
import './App.css'
import { usePostById } from './hooks/usePostById';
import { usePosts } from './hooks/usePosts';
import { postsService } from './services/posts.api';

const isAuth = true;

function App() {
  const { isLoading, data } = usePosts(isAuth);
  const { post } = usePostById(1);
  console.log(post)

  const queryClient = useQueryClient();

  const handleClickInvalidatePosts = () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ['posts', 'new'],
    mutationFn: postsService.createNewPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  });

  const handleClickCreateNEwPost = () => {
    mutate({
      userId: 1,
      title: 'new post',
      body: 'www'
    })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data?.length) {
    return <div>Not found</div>
  }



  return (
    <>
      <h1>Posts</h1>
      <button onClick={handleClickInvalidatePosts}>Invalidate posts</button>
      <button onClick={handleClickCreateNEwPost} disabled={isPending}>{isPending ? 'Loading...' : 'Create new post'}</button>
      {data.map(item => (<div key={item.id}>{item.title}</div>))}
    </>
  )
}

export default App
