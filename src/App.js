import './App.css';
import { useCount } from './useCount';
import { useToogle } from './useToogle';


function App() {
  const [isVisible, toogle] = useToogle()
  const {count, increase,decrease,reset} = useCount()

  return (
    <div className="App">
      <div>
        <button onClick={toogle}>
            {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <h1> Hidden Text </h1>}
      </div>
      <div>
        <h2>{count}</h2>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
