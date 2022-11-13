import React from "react";

export default function Hero1(props) {
  return (
    <div>
      <div className="bg-white font-bold font-apo text-6xl py-40">
        <h1>
          <span>always be</span>
          <div class="message">
            <div class="word1">close</div>
            <div class="word2">code</div>
            <div class="word3">Creative</div>
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
