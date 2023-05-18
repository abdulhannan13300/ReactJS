import './App.css';

function App() {
  const users = [
    { name:"jack", age:22 },
    { name:"jessica", age:24},
    { name:"mike", age:"25"},
  ];
  return ( 
    <div className="App"> 
      {users.map((user, key) => {
        return <User name={user.name} age={user.age}/>;
      })}
    </div>
  );
}
const User = (props) => {
  return ( 
    <div>
      {props.name} {props.age}
    </div>
  );  
}



export default App;