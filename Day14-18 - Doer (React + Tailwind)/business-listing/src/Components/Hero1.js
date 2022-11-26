import React from "react";


export default function Hero1(props) {
  return (
    <>
      <div className="bg-white text-6xl py-48">
        <h1 className="movingWords">
          <span>Tasks</span>
          <div className="message font-rale">
            <div className="word2 ">oh Shit!</div>
            <div className="word1 ">Doing</div>
            <div className="word3 ">Done :)</div>
          </div>
        </h1>
      </div>

      <div className="relative h-100 heroBg -mb-96">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col text-start text-black ">
            <p className="text-7xl leading-tighter">
              The only
              <span className=" text-black font-rale font-semibold text-9xl">
                TASKS
              </span>
              App You Will Ever Need. 🤍
            </p>
          </div>
          <img src={props.hero} alt="" />
        </div>
      </div>
                         {/* **************** Background waves ******************** */}
      <div className=" h-screen">
        <div className="bg text-6xl py-40"></div>
        <div className="bg bg2 text-6xl py-48"></div>
        <div className="bg bg3 text-6xl py-56"></div>
      </div>

      {/* ----> same code as of q-riocity ( site screenshot - side me explanation) */}


    </>
  );
}
