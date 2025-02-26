import './App.css';

function App() {
  return (
    <div className="bg-[#00274e] h-screen flex flex-col justify-center items-center text-white ">
      <div className="text-2xl font-bold mb-8">Verify Your Age</div>
      <div className="mb-4 text-center text-sm  text-[#7b9abf]">
        Please confirm your birth year. This data will not be stored.
      </div>
      <input
        type="text" placeholder='Your Birth Year'
        className="p-2 px-2 border border-[#38597c] text-blue-50 mb-4 bg-[#18395f] rounded-lg w-68"
      />
      <button className="bg-[#738aa0] text-red-50 w-68 px-4 py-2  rounded-lg hover:bg-sky-700">
        Submit
      </button>
    </div>
  );
}

export default App;
