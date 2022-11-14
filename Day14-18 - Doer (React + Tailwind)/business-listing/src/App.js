import "./App.css";
import "./index.css"
import Navbar from "./Components/Navbar";
import Hero1 from "./Components/Hero1";
import heroImg from "./media/images/73810-business-idea-animation.gif";



function App() {
  return (
    <div className="App">

      <Navbar />

      <Hero1 hero = {heroImg} />
      
        
      
    </div>
  );
}

export default App;