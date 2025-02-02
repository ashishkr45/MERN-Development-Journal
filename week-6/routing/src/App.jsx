import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/neet/online-class-11" element={<Class11Program />}/>
            <Route path="/neet/online-class-12" element={<Class12Program />}/>
            <Route path="/" element={<Landing />}/>
            <Route path="*" element={<NoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Layout() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">LOJ</Link>
        <Link to="/neet/online-class-11">Class 11</Link>
        <Link to="/neet/online-class-12">Class 12</Link>
      </nav>
      <Outlet />
    </>
  );
}

function NoPage() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }
  return <div>
    Take this 404 in your face Mofo <br />
    Don't play with us! <br /><br />
    <button className='LOJ' onClick={redirectUser}>LOJ</button>
  </div>
}

function Landing() {
  return <div>
    Welcome to Lucifero over Jee
  </div>
}

function Class11Program() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }

  return <div>
    Class 11 neet focks cum here!!! <br /><br />
    <button className='LOJ' onClick={redirectUser}>LOJ</button>
  </div>
}

function Class12Program() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }

  return <div>
    Class 12 neet focks cum here!!! <br /><br />
    <button className='LOJ' onClick={redirectUser}>LOJ</button>
  </div>
}

export default App