import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [excuse,setExcuse] = useState("")

const fetchExcuse = (category) => {
  axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
  .then((res) => {
  //This Api returns an array of data so we use data[0] in this case.
  //[{"id":207,"excuse":"My temperature is really high today.","category":"children"}]
  setExcuse(res.data[0].excuse)
  })
}

  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <h2>{excuse}</h2>
    </div>
  );
}

export default App;


