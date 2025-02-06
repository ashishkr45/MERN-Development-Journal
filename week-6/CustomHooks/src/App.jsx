import { useState } from 'react'
import './App.css'

// creation of custom hooks
function useCounter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(current => current + 1);
  }

  return {
    count,
    increment
  }
}

function App() {

  return ( // this all are having there independent hooks
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

function Counter() { // created a Counter component
  const { count, increment } = useCounter();
  return (
    <div>
      <button onClick={increment}>increment {count}</button>
    </div>
  )
}

export default App
