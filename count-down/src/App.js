import './App.css';
import CountDown from './components/CountDown';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const url = 'http://localhost:3000/time';
    const method = 'GET';
    const headers = {
      'Content-Type': 'application/json',
    };
    fetch(url,{method, headers}).then((response) => {
      console.log(response);
    } )
  })

  return (
    <CountDown />
  );
}

export default App;
