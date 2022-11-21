import "./App.css";
import "./index.css"
import Navbar from "./Components/Navbar";
import Hero1 from "./Components/Hero1";
import heroImg from "./media/images/73810-business-idea-animation.gif";
import Footer from "./Components/Footer";




function App() {
  return (
    <div className="App">

      <Navbar />

      <Hero1 hero = {heroImg} />
      
      <Footer />
      
    </div>
  );
}

export default App;
