import { useState } from 'react';
import './App.css';
import './media/style.css';


function App() {
  

  const [calc ,setCalc] = useState("")
  const [result,setResult] = useState();

  const ops = ['/','*','+','-','.'];

  const updateCalc = (value)=>{

    if(
      (ops.includes(value) && calc === '' ) || (ops.includes(value) && ops.includes(calc.slice(-1)))
    ){
      return ;
    }

    setCalc(calc + value)

    if(!ops.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }

  const calculate = () =>{
    console.log("object");
    setCalc(eval((calc)).toString());
  }




  return (
    <div className="App">
      <div className="grid-container">

        <div className="output">
          <div className="previousOutput">{result ? `${result}` : ''} </div>
          <div id ="current"  className="currentOutput">{calc || "0"}</div>
        </div>

        <button onClick={() => updateCalc('/')} className='span-two'>AC</button>    
        <button >DEL</button>
        <button value={`/`} onClick={() => updateCalc('/')}>/</button>
        <button value={1} onClick={() => updateCalc('1')}>1</button>
        <button value={2} onClick={() => updateCalc('2')}>2</button>
        <button value={3} onClick={() => updateCalc('3')}>3</button>
        <button value={`*`} onClick={() => updateCalc('*')}>*</button>
        <button value={4} onClick={() => updateCalc('4')}>4</button>
        <button value={5} onClick={() => updateCalc('5')}>5</button>
        <button value={6} onClick={() => updateCalc('6')}>6</button>
        <button value={`+`} onClick={() => updateCalc('+')}>+</button>
        <button value={7} onClick={() => updateCalc('7')}>7</button>
        <button value={8} onClick={() => updateCalc('8')}>8</button>
        <button value={9} onClick={() => updateCalc('9')}>9</button>
        <button value={`-`} onClick={() => updateCalc('-')}>-</button>
        <button value={0} onClick={() => updateCalc('0')} className='span-two'>0</button>
        <button value={`.`} onClick={() => updateCalc('/')}>.</button>
        <button value={`=`} onClick={calculate} >=</button>

      </div>
    </div>
  );
}

export default App;
