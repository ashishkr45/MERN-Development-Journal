import { atom, RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { todoAtomFamily } from './atomFamily';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo id={1}/>
        <Todo id={2}/>
      </RecoilRoot>
    </div>
  )
}

function Todo({ id }) {
  const currTodo = useRecoilValue(todoAtomFamily(id));
  console.log(currTodo);
  if (!currTodo) return <p>Loading...</p>;
  return (
    <>
      {currTodo.title}: <span></span>
      {currTodo.description} <br />
    </>
  )
}
/*
**this method is not good cuz, for each todo we've to make a seperate todoAtom
so insted we create atom family
const todoAtom = atom({
  key: "todoAtom",
  default: {
    id: 1,
    title: "Get your shit together",
    discript: "build shi"
  }
})
*/
export default App
