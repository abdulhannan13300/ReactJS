import './App.css';
import { Person, Country } from './Person'

function App() {


  return (
    <div className="App">
      <Person 
        name = "Abdul Hannan"
        email = "abdul@gmail.com"
        age = {23}
        isMarried = {true}
        friends={['james', 'jerry', 'jake']}
        country = {Country.India}
      />
    </div>
  );
}

export default App;
