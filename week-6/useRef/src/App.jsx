import { useState, useRef } from 'react'
import './App.css'
{/*Building a Clock with a start and stop functionality*/}
function App() {
  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef();

  function startClock() {
    let value = setInterval(function() {
      setCurrentCount(c => c + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    clearInterval(timer);
  }

  return ( <div style={{fontSize: "50px"}}>
    {currentCount} <br />
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
  )
}

export default App
