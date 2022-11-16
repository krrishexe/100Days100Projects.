import React from "react";
var FontAwesome = require("react-fontawesome");

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
              <span className=" text-black font-rale font-semibold text-9xl">
                TASKS
              </span>
              App You Will Ever Need. 🤍
            </p>
          </div>
          <img src={props.hero} alt="" />
        </div>
      </div>

      <div className=" h-screen flex items-center justify-between">
        <div className="bg text-6xl py-40"></div>
        <div className="bg bg2 text-6xl py-48"></div>
        <div className="bg bg3 text-6xl py-56"></div>
      </div>
      <div className="-my-52 content py-52 flex justify-center items-center flex-col">
        <h1 className="font-rale ">Creator's </h1>
        <div className="hero3container">
          <div className="card card0">
            <div className="hoverBorder">
              <h2>Al Pacino</h2>
              <div className="icons">
                <i className="fa fa-codepen" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-dribbble" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="card card1">
            <div className="hoverBorder">
              <h2>Ben Stiller</h2>
              <div className="icons">
                <i className="fa fa-codepen" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-dribbble" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div className="card card2">
            <div className="hoverBorder">
              <h2>Patrick Stewart</h2>
              <div className="icons">
                <i className="fa fa-codepen" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                <i className="fa fa-dribbble" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
