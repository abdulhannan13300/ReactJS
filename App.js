import './App.css';
import {useState} from 'react';

function App() {

  const [inputValue,setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return ( 
    <div className="App"> 
    <input type='text' onChange={handleInputChange}/>
     <br></br>{inputValue}
    </div> 
  );
}


export default App;

