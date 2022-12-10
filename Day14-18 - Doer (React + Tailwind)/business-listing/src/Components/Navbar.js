import React from "react";
import {
  Link
} from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <nav className="absolute right-0 left-0 z-10">
        <div className="w-9/12 mx-52 py-5 flex justify-between items-center relative">
          <div>

          <a href="#sidenav" className="btn open">≡</a>
        <div id="sidenav">
            <ul>
                <li className="center user">
                    <img src="https://placeimg.com/300/300/people" alt="User" />
                    <p>John Doe</p>
                </li>
                <li className="divider"></li>
                <li className="title">Links</li>
                <li className="item active"><a href="#">Home</a></li>
                <li className="item"><a href="#">About</a></li>
                <li className="item"><a href="#">Portfolio</a></li>
                <li className="item"><a href="#">Testimonials</a></li>
                <li className="item"><a href="#">Contact</a></li>
                <li className="divider"></li>
                <li className="title">Projects</li>
                <li className="item"><a href="#">Project 1</a></li>
                <li className="item"><a href="#">Project 2</a></li>
                <li className="item"><a href="#">Project 3</a></li>
            </ul>
        </div>
        <a href="#!" className="close sidenav-overlay"></a>



            {/* <button className=" py-2 px-4 border rounded-md text-purple-500 border-purple-500  bg-transparent hover:bg-purple-400 hover:text-white hover:border-white font-semibold">
              Add Tasks
            </button> */}





          </div>

          <div className="text-3xl font-Pin font-semibold">
            <a href="/"> Tasks</a>
          </div>

          <div className="space-x-4">
            <button className="text-lg "><Link to="/signin">Sign In</Link></button>
            <span>/</span>
            <button className="text-lg "><Link to="/signin">Sign Up</Link></button>
          </div>
        </div>
      </nav>
    </div>
  );
}
