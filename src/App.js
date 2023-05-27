import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [catFact, setCatFact] = useState("")

  const fetchCatFact = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }

  useEffect(() => {
    fetchCatFact();
  }, []);


  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p> {catFact} </p>
    </div>
  );
}

export default App;


