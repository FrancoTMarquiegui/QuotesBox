import './App.css'
import QuoteBox from './QuoteBox';
import quotes from './quotes.json';

function App() {
  
  const colorPalet = ['#f52c07', '#f1f507', '#07eff5', '#1d07f5', '#ea07f5'];
  
  const randomColor = Math.floor(Math.random() * colorPalet.length);
  document.body.style= `background: ${colorPalet[randomColor]}`

  const color = colorPalet[randomColor];
 

  return (
 
    <div className="App" style={{background: color }}>
     <QuoteBox color={color}/>
    </div>

  )
}

export default App
