import { useState, createContext, useContext } from 'react';
import litBulb from './assets/litBulb.png';
import offBulb from './assets/offBulb.png';
import './App.css';

const BulbContext = createContext(); // using context api for better passing of props without prop drilling

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <BulbContext.Provider value={{bulbOn, setBulbOn}}>
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <div>
      <BulbProvider> {/*wrapping the componets which'll further be needing the porps */}
        <LightBulb />
      </BulbProvider>
    </div>
  );
}

function LightBulb() {
  return (
    <div>
      <BulbState/> {/*bulbOn is a prop to the Bulb State component*/} {/*no it'll be passed using context api */}
      <ToggleBulbState/> {/*setBulb0n are prop to the ToggleBulbState component */}
    </div>
  );
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext);
  return (
    <div className={`bulb-container ${bulbOn ? "glow" : ""}`}>
      <img 
        src={bulbOn ? litBulb : offBulb} 
        alt={bulbOn ? "Lit Bulb" : "Off Bulb"}
        className="bulb-image"
      />
    </div>
  );
}

function ToggleBulbState() {
  const { setBulbOn } = useContext(BulbContext);
  function toggle() {
    setBulbOn(current => !current);
  }
  return <button onClick={toggle}>Toggle</button>;
}

export default App;
