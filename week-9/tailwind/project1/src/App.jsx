import './App.css';

function App() {
  return (
    <div className="bg-[#00274e] h-screen flex flex-col justify-center items-center text-white ">
      <div className="text-2xl font-bold mb-4 mb-8">Verify Your Age</div>
      <div className="mb-4 text-center text-base text-[#7b9abf]">
        Please confirm your birth year. This data will not be stored.
      </div>
      <input
        type="text" placeholder='Your Birth Year'
        className="p-2 border border-gray-300 rounded mb-4 bg-[#18395f] text-black"
      />
      <button className="bg-white text-sky-700 px-4 py-2 rounded hover:bg-gray-200">
        Submit
      </button>
    </div>
  );
}

export default App;
