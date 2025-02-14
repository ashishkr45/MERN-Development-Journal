import './App.css';
import { RecoilRoot , useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom, evenSelector } from './counter';

function App() {
  return (
    <div style={{background: "#fff", width: "200px"}}>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </div>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button onClick={() => {
        setCount(current => current + 2)
      }}>Increase</button>

      <button onClick={() => {
        setCount(current => current - 1)
      }}>Decrease</button>
    </div>
  )
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>
      <p>{count}</p>
  </div>
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return (
    <div>
      <p>{even ? "Even Digi" : "Odd Digi"}</p>
    </div>
  )
}

export default App;