import React, { useState } from 'react';
import quotes from './quotes.json';

const QuoteBox = ({color}) => {
  
console.log(quotes)

const randomIndex = Math.floor(Math.random() * quotes.length);

const [quote, setQuote] = useState(randomIndex);

const next = () => {
  const randomNum = Math.floor(Math.random() * quote.length);
  setQuote(randomNum)
}


  return (
    <div className='card'>
       <h1 className='wink' style={{color: color}}>
        ''
       </h1>
      <p className='text' style={{color: color}}>
        {quotes[randomIndex].quote}

       </p>
      <h2 className='author' style={{color: color}}>
        {quotes[randomIndex].author}

      </h2>
      <button 
      className='button' 
      onClick={next}
      style={{color: color}}
      >
        Next
        </button>

    </div>
  );
};

export default QuoteBox;