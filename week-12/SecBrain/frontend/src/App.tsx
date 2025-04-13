import { Button } from './components/ui/button'
import { AiOutlinePlus } from "react-icons/ai";
import './App.css'

function App() {

  return (
    <>
     <div className='p-9'>
         <Button
          variant="primary"
          size="lg"
          innerText="Click Me"
          icon={<AiOutlinePlus />}
          onClick={() => alert("Primary Button Clicked")}
        />
     </div>
    </>
  )
}

export default App
