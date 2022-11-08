import './App.css';
import './media/style.css';

function App() {
  return (
    <div className="App">
      <div className="grid-container">

        <div className="output">
          <div className="previousOutput">1234,444</div>
          <div className="currentOutput">123456</div>
        </div>

        <button className='span-two'>AC</button>    
        <button>DEL</button>
        <button>/</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button className='span-two'>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </div>
  );
}

export default App;
