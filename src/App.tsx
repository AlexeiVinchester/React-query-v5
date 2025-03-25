import { useQueryClient } from '@tanstack/react-query';
import './App.css'
import { usePosts } from './hooks/usePosts';
import { useMutatePosts } from './hooks/useMutatePosts';

const isAuth = true;

function App() {
  const { isLoading, data } = usePosts(isAuth);
  const queryClient = useQueryClient();

  const { isPendingCreation, handleClickCreateNewPost } = useMutatePosts(queryClient)

  const handleClickInvalidatePosts = () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  };

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
      <button
        onClick={handleClickCreateNewPost}
        disabled={isPendingCreation}
      >
        {isPendingCreation ? 'Loading...' : 'Create new post'}
      </button>
      {data.map(item => (<div key={item.id}>{item.title}</div>))}
    </>
  )
}

export default App
