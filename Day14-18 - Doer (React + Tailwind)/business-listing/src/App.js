import "./App.css";
import "./index.css"
import Navbar from "./Components/Navbar";
import Hero1 from "./Components/Hero1";
import heroImg from "./media/images/73810-business-idea-animation.gif";
import Footer from "./Components/Footer";
import Signin from "./Components/Signin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Hero1 hero={heroImg} />} />
        </Routes>
        <Routes>
          <Route exact path="/signin" element={<Signin />} />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
