import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setDatA] = useState(null)
  const [name, setName] = useState("")
  

  const predictAge = () => {
    axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) => {
    setData(res.data)
  })
  }

  return (
    <div className="App">
      <input 
        placeholder='Ex. Abdul Hannan'
        onChange={(event) => {
        setName(event.target.value);
        }}  
      />
      <button onClick={predictAge}> Predict Age </button>
      {/* When Using null in useState pls call using:<h2> Name: {data?.name}</h2>
      or just use an object in useState({}) */}
      <h2> Name: {data?.name}</h2>
      <h2> Predicted age: {data?.age}</h2>
      <h2> Count: {data?.count}</h2>
    </div>
  );
}

export default App;


