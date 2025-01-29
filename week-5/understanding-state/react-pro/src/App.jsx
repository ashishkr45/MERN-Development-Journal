import { useState  } from "react";

function App() {
  return (
    <div>
      <ToggleMessage />
      <NotificationC />
    </div>
  )
}

const NotificationC = () => {
  let [notiCount, setNotiCount] = useState(0);

  function increment() {
    setNotiCount(notiCount + 1);
  }

  return (
    <div>
      <button onClick={increment}>Noti Count</button>
      {notiCount}
    </div>
  );
}

const ToggleMessage = () => {
  let [isVisible, setIsVisible] = useState(true);

  function toggle() {
    setIsVisible(!isVisible);
  }
  
  return (
    <div>
        <button onClick={toggle}>
          Toggle Message
        </button>
        {isVisible && <p>This meaage os conditionally rendered!</p>}
    </div>
  )
}

export default App;