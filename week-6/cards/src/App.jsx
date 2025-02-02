import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
        <Cards 
          iconURL="https://i.pinimg.com/736x/75/aa/c7/75aac75973bfaefd1bdece6f1c10f410.jpg"
          name="Sanji"
          dishName="Biryani"
          picURL="https://plus.unsplash.com/premium_photo-1694141252026-3df1de888a21?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          discript="Biryani (/bɜːrˈjɑːni/) is a mixed rice dish popular in South Asia, made with rice, meat (chicken, goat, lamb, beef) or seafood (prawns or fish), and spices"
        />
        <WeBurnt>
          <div>
            we burnt the shit!! <br /><br />
            <input type="text" />
          </div>
        </WeBurnt>

      </div>
    </>
  )
}

function Cards({iconURL, name, picURL, discript, dishName}) {
  return (
    <div className='card'>
      <div style={{ display: "flex", alignItems: "left", gap: "80px", position: "absolute", left: "20px" }}>
        <img 
          src={iconURL} 
          alt="icon" 
          style={{ borderRadius: "50%", height: "40px", width: "40px" }} 
        />
        <span style={{ fontWeight: "bold", position: "absolute", bottom: "10px", left: "55px" }}>{name}</span>
      </div>

      {/* Card Content */}
      <div style={{ marginTop: "60px", textAlign: "center" }}>
        <img 
          src={picURL} 
          alt="pic" 
          style={{ width: "100%", borderRadius: "10px" }} 
        />
        <p>{discript}</p>
      </div>
    </div>
  );
}

function WeBurnt({ children }){
  return (
    <div className='card'>
      {children}
    </div>
  ) 
}

export default App;