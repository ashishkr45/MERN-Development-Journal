import './App.css'
import useFetch from './hooks/useFetch';
import useCounter from './hooks/useCounter';


function App() {
  const { posts, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const {count, increment, decrement} = useCounter();

  return (
    <div style={{border: "2px solid white", padding: "20px", borderRadius: "15px", textAlign: "center" }}>
      {loading ? "Loading..." : posts[count].title } <br /><br />
      <button style={{border: "2px solid white", borderRadius: "20px"}} onClick={decrement}>Prev</button>
      <span> </span>
      <button style={{border: "2px solid white", borderRadius: "20px"}} onClick={increment}>Next</button>
    </div>
  )
}

export default App