import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="w-9/12 mx-auto py-5 flex justify-between items-center">

        <div>
          <button className="button py-2 px-4 rounded-md border text-purple-500 border-purple-500  bg-transparent hover:bg-purple-400 hover:text-white hover:border-white font-semibold">
            Add Tasks
          </button>
        </div>

        <div className="text-3xl font-Pin font-semibold">
          <a href="#"> Doer</a>
        </div>

        <div className="space-x-4">
          <button className="text-lg ">Sign In</button>
          <button className="text-lg ">Sign Up</button>
        </div>
      </div>
    </div>
  );
}