import "./App.css";
import "./index.css"
import Navbar from "./Components/Navbar";
import hero from "./media/images/73810-business-idea-animation.gif"


function App() {
  return (
    <div className="App">

      <Navbar />


      <div className="bg-white font-bold font-apo text-6xl py-40 ">
        <span className="tracking-widest">Buisness Listing </span>
      </div>

      <div className="relative h-100 heroBg">
        <div className="flex justify-end my-5"> 
          <img src={hero} alt=""/>
        </div>
        </div>

        <div></div>
      


















    </div>
  );
}

export default App;
