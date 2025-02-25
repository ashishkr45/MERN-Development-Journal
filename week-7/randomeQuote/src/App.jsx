import { useState } from 'react';
import quortGenerator from './quortGenerator';
import './App.css';

function App() {
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
