import './App.css';
import { RecoilRoot , useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './counter';

function App() {
  return (
    <div style={{background: "#000", width: "200px"}}>
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </div>
  );
}

function Counter() {

  return <div>
    <CurrentCount />
    <Buttons />
  </div>
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>Count: {count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c + 1)
  }

  function decrease() {
    setCount(c => c - 1)
  }

  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

export default App;
