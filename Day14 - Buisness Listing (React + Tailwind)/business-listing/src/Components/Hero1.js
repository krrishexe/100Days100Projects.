import React from "react";

export default function Hero1(props) {
  return (
    <div>
      <div className="bg-white text-6xl py-40">
        <h1>
          <span>Business </span>
          <div className="message font-rale">
            <div className="word1 ">Startup</div>
            <div className="word2 ">Idea's</div>
            <div className="word3 ">Creative</div>
          </div>
        </h1>
      </div>

      <div className="relative h-100 heroBg">
        <div className="flex justify-end my-5">
          <img src={props.hero} alt="" />
        </div>
      </div>
    </div>
  );
}
