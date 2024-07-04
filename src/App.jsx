import './App.css';
import { useState } from 'react';

function App() {
  const[counter, setCounter] = useState(0);
  let addCounter = ()=>{
    setCounter(counter+1);
    if(counter >= 20){
      setCounter(counter)
    }
  }
  let decCounter = ()=>{
    setCounter(counter-1);
    if(counter <= 0){
      setCounter(counter)
    }
  }
  let delCounter = ()=>{
    setCounter(0);
  }
  return (
    <>
    <div className='btn_div'>
      <h1>This is the Counter App</h1>
      <br/>
      <button onClick={addCounter}>Increase : {counter}</button>
      <br/>
      <br/>
      <button onClick={decCounter}>Decrease :{counter}</button>
      <br/>
      <br/>
      <button onClick={delCounter}>Delete :{counter}</button>
      <br/>
      <br/>
      <h2>Increase/Decrease/Deletion of Counter {counter}</h2>
      </div>
    </>
  );
}

export default App;
