import './App.css';
import { SideBar } from './Components/SideBar';
import { ProfileCompo } from './Components/ProfileCompo';
import { useState } from 'react';

function App() {
  const [SideBarOpen, setSideBarOpen] = useState(true);

  return (
    <>
      <div className="flex">
        <SideBar SideBarOpen={SideBarOpen} setSideBarOpen={setSideBarOpen}/>
        <MainContent />
      </div>
    </>
  )
}

function MainContent() {
  return (
    <div className="bg-green-400 w-full h-screen ">
      <div className='h-28 bg-black' />
      <div className='flex'>
        <ProfileCompo className='col-span-3 h-60' />
        <div className='grid grid-cols-10 gap-8 p-8 '>
          <div className='rounded-2xl shadow-lg bg-green-100 col-span-5 w-[450px] h-72'></div>
          <div className='rounded-2xl shadow-lg bg-green-100 col-span-3 h-72'></div>
        </div>
      </div>
    </div>
  );
}

export default App;