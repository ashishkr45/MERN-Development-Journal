import { Button } from './components/ui/button'
import { AddIcon, ShareIcon  } from './icons/Icons'
import './App.css'

function App() {

  return (
    <div className=''>
     <div className='p-9'>
         <Button
          variant="secondary"
          size="md"
          innerText="Share Brain"
          icon={<ShareIcon size='md'/>}
          onClick={() => alert("Primary Button Clicked")}
        />
        <Button
          variant="primary"
          size="md"
          innerText="Add Content"
          icon= {<AddIcon size='md'/>}
          onClick={() => alert("Primary Button Clicked")}
        />
     </div>
    </div>
  )
}

export default App
