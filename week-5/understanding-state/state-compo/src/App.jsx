import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(prevCount => prevCount + 1);
  }

  useEffect(function() {
    setInterval(increaseCount, 1000);
  }, []); // this effect will run on mount, because the array is empty

  useEffect(() => { // this'll everytime the dependecy in the sq-bracket changes
    console.log("change "+ count)
  }, [count]);

  return (
    <div style={{display: "flex"}}>
      <div style={{background: "red", borderRadius: 20, width: 20, height: 20, position: "relative", left: "45px", paddingBottom:"4px"}}>
        {count}
      </div>
      <div>
        <img style={{cursor: "pointer", width: "40"}} src="https://static-00.iconduck.com/assets.00/notification-bell-icon-1775x2048-y1w4ovo2.png" alt="img-icon"
        width={40} />
      </div>
    </div>
  )
}

export default App