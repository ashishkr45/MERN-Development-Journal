import { useState } from 'react';
import quortGenerator from './quortGenerator';
import './App.css';

function App() {
  const [quote, setQuote] = useState(null);

  const handleNewQuote = async () => {
    const newQuote = await quortGenerator(); // Wait for the quote to be fetched
    setQuote(newQuote); // Update state with the new quote
  };

  return (
    <>
      <div className='quoteBox'>
        {quote ? (
          <>
            <p>{quote.content}</p>
            <h4>- {quote.author}</h4>
          </>
        ) : (
          <p>Click the button to generate a quote.</p>
        )}
      </div>
      <button onClick={handleNewQuote}>Generate Quote</button>
    </>
  );
}

export default App;
