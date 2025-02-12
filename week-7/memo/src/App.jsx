import { memo, useEffect, useState } from 'react'
// import './App.css'

function App() {

  return (
    <div>
      <ComponentCounter />
    </div>
  )
}

function ComponentCounter() {
  const [count, useCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      useCount(current => current + 1);
    }, 3000);
  }, []);

  return (
    <div>
      <CurrentCount count={count}/>
      <ChangeCurrent useCount={useCount}/>
    </div>
  )
}

const CurrentCount = memo(({count}) => {
  return (
    <p>{count}</p>
  )
});

const ChangeCurrent = memo(({ useCount }) => {
  return (
    <div>
      <button onClick={() => useCount(current => current + 1)}>Increment</button>
      <button onClick={() => useCount(current => current - 1)}>Decrement</button>
    </div>
  );
});

export default App;
