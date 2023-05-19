import './App.css';

function App() {
const planets = [
  { name:"Mars", isGasPlanet:false },
  { name:"Jupiter", isGasPlanet:true },
  { name:"Saturn", isGasPlanet:false },
  { name:"Earth", isGasPlanet:false },
  { name:"Venus", isGasPlanet:false },
  { name:"Mercury", isGasPlanet:false },
  { name:"Neptune", isGasPlanet:true },
  { name:"Uranus", isGasPlanet:true },
];

  return ( 
    <div className="App"> 
      {planets.map((planet) => {
        return (
          planet.isGasPlanet && <h1>{planet.name}</h1>
        );
      })}
    </div>
  );
}


export default App;
