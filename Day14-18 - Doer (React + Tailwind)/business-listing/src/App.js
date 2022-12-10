import "./App.css";
import "./index.css"
import Navbar from "./Components/Navbar";
import Hero1 from "./Components/Hero1";
import heroImg from "./media/images/73810-business-idea-animation.gif";
import Footer from "./Components/Footer";
import Signin from "./Components/Signin";
import NoteState from "./Context/notes/NoteStates";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes
} from "react-router-dom";
import Notes from "./Components/Notes";




function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Navbar />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={<Hero1 hero={heroImg} />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={<Footer />} />
          </Routes>
          <Routes>
            <Route exact path="/signin" element={<Signin />} />
          </Routes>


          <Routes>
            <Route exact path="/notes" element={<><Navbar /> <Notes /></>} />
          </Routes>
          
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
