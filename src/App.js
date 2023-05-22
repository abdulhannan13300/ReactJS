import './App.css';
import {useState} from 'react';

function App() {

const [textColor, setTextColor] = useState("black");

  return ( 
    <div className="App"> 
      <button onClick={() => {
        setTextColor(textColor ==="black" ? "red" : "black");
      }}>Change Text Color</button>
      <h1 style={{color:textColor}}>This is the text for testing</h1>

    </div> 
  );
}


export default App;