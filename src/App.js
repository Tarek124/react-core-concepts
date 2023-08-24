import logo from './logo.svg';
import './App.css';

function App() {

const nayoks =["Anwar", "Jafor", "Alomgir", "Salman"]

  return (
    <div className="App">
      <header className="App-header">
       <Person name="Munna" job="Footboller"></Person>
       <Person name="Masum" job="Dorshok"></Person>
      </header>
    </div>
  );
}
function Person(x){
  return (
    <div style={{
      border:'1px solid gold',
      padding:'20px',
      margin:"10px",
      width:'400px'
    }}>
      <h3>My Name: {x.name}</h3>
      <p>My Profession: {x.job}</p>
    </div>
  )
}

export default App;
