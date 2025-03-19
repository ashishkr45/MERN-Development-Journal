import './App.css'
import { SideBar } from './Components/SideBar'

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="bg-green-400 w-full h-screen p-4">
          <p>content</p>
          <button onClick={() => {
            document.querySelector("html").classList.toggle("dark");
          }}>Theam</button>
        </div>
      </div>
    </>
  )
}

export default App;