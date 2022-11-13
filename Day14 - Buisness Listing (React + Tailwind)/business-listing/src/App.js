import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <div class="w-9/12 mx-auto py-5 flex justify-between items-center">
            <div class="text-lg">
              <a href="#">Business Listing</a>
            </div>

            <div>
              <button class="button py-2 px-4 rounded-md border text-purple-500 border-purple-500  bg-transparent hover:bg-purple-300 hover:text-white">
                Add your Business
              </button>
            </div>

            <div className="space-x-4">
              <button className="text-lg ">Sign In</button>
              <button className="text-lg ">Sign Up</button>
            </div>

        </div>
      </nav>
    </div>
  );
}

export default App;
