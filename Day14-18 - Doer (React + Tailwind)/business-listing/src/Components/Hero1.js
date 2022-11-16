import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Hero1(props) {
  return (
    <div>
      <div className="bg-white text-6xl py-48">
        <h1>
          <span>Tasks</span>
          <div className="message font-rale">
            <div className="word2 ">oh Shit!</div>
            <div className="word1 ">Doing</div>
            <div className="word3 ">Done :)</div>
          </div>
        </h1>
      </div>

      <div className="relative h-100 heroBg">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col text-start text-black ">
            <p className="text-7xl leading-tighter">
              The only
              <span className=" text-black font-quick font-bold text-9xl">
                TASKS 
              </span>
              App You Will Ever Need. 🤍
            </p>
          </div>
          <img src={props.hero} alt="" />
        </div>
      </div>

      <div className=" h-screen flex items-center justify-between">

      <div class="bg text-6xl py-40"></div>
      <div class="bg bg2 text-6xl py-48"></div>
      <div class="bg bg3 text-6xl py-56"></div>
      </div>
      {/* <div class="content ">
        <h1>Sliding Diagonals Background Effect</h1>
      </div> */}
    </div>
  );
}
