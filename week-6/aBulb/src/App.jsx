import { useState } from 'react';
import litBulb from './assets/litBulb.png';
import offBulb from './assets/offBulb.png';
import './App.css';

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbState bulbOn={bulbOn} /> {/*bulbOn is a prop to the Bulb State component*/}
      <ToggleBulbState setBulbOn={setBulbOn} /> {/*setBulb0n are prop to the ToggleBulbState component */}
    </div>
  );
}

function BulbState({ bulbOn }) {
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

function ToggleBulbState({ setBulbOn }) {
  function toggle() {
    setBulbOn(current => !current);
  }
  return <button onClick={toggle}>Toggle</button>;
}

export default App;
