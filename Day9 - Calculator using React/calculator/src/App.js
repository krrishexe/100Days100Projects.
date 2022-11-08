import { useState } from 'react';
import './App.css';
import './media/style.css';




function App() {
  
  const showOnScreen =(buttonValue) =>{
    setText(buttonValue);
    console.log(buttonValue);
    console.log(setText(`{buttonValue}`));

    const currentOutputDiv = document.getElementById("previous");
    currentOutputDiv.innerHTML = `<p>${buttonValue}</p>`
    
  }

  const handleOnClick =(event)=>{
    // console.log(text);
    const buttonValue = event.target.value;

    console.log(event.target.value);
    

    showOnScreen(buttonValue);
    }


  const handleOnClear =()=>{
    // console.log(text);
    setText("")
    }

  const [text,setText] = useState("0")

  return (
    <div className="App">
      <div className="grid-container">

        <div className="output">
          <div id ="previous" className="previousOutput"><p>0</p></div>
          <div className="currentOutput"><p>0</p></div>
        </div>

        <button onClick={handleOnClear} className='span-two'>AC</button>    
        <button onClick={handleOnClick}>DEL</button>
        <button value={`/`} onClick={handleOnClick}>/</button>
        <button value={1} onClick={handleOnClick}>1</button>
        <button value={2} onClick={handleOnClick}>2</button>
        <button value={3} onClick={handleOnClick}>3</button>
        <button value={`*`} onClick={handleOnClick}>*</button>
        <button value={4} onClick={handleOnClick}>4</button>
        <button value={5} onClick={handleOnClick}>5</button>
        <button value={6} onClick={handleOnClick}>6</button>
        <button value={`+`} onClick={handleOnClick}>+</button>
        <button value={7} onClick={handleOnClick}>7</button>
        <button value={8} onClick={handleOnClick}>8</button>
        <button value={9} onClick={handleOnClick}>9</button>
        <button value={`-`} onClick={handleOnClick}>-</button>
        <button value={0} onClick={handleOnClick} className='span-two'>0</button>
        <button value={`.`} onClick={handleOnClick}>.</button>
        <button value={`=`} onClick={handleOnClick}>=</button>

      </div>
    </div>
  );
}

export default App;
