import { useState } from 'react';
import './App.css';

function App() {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [bmi, setBmi] = useState(0)
  

  function count(e){
    e.preventDefault()
    const result = weight / (height * height)
    setBmi(result)

  }


  return (
    <div className="App">
      <h3>Calculatin body mass index</h3>
      <form onSubmit={count} >
        <div>
          <label>Height</label>
          <input value={height} onChange ={e => setHeight(e.target.value)}/>
        </div>
        <div>
          <label>Weight</label>
          <input value={weight} onChange ={e => setWeight(e.target.value)}/>      
        </div>
        <div>
        <output>{bmi.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
  }

export default App;
