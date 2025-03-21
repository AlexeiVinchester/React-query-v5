import './App.css'
import { usePosts } from './hooks/usePosts';

const isAuth = false;

function App() {
  const { isLoading, isSuccess, data } = usePosts(isAuth);

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <h1>React query v5</h1>
      {isSuccess && data.map(item => (<div key={item.id}>{item.title}</div>))}
      {!isSuccess && <div>Not found</div>}
    </>
  )
}

export default App
