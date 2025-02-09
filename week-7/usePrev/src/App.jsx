import { useState } from 'react'
import './App.css'
import { usePrev } from './hooks/usePrev'

function App() {
  const [count, setCount] = useState(0);
  const prev = usePrev(count);
  return (
    <>
      <div style={{border: "2px solid #000", width: "200px", 
        padding: "5px", borderRadius: "10px", background: " #E3DAC9", color: "#000"
      }}>
        <p>{count}</p>
        <button style={{border: "2px solid #F0EEE4", background: "#FFDEAD", color: "#000"}} onClick={() => {
          setCount(current => current + 1);
        }}>Increment</button>

        <p>Previous Value: {prev}</p>
      </div>
    </>
  )
}

export default App
