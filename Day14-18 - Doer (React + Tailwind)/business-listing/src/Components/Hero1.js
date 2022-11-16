import React from "react";
import { FaPinterest , FaInstagram ,FaLinkedin, FaTwitter , FaCodepen } from "react-icons/fa";

export default function Hero1(props) {
  return (
    <>
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

      <div className=" h-screen">
        <div className="bg text-6xl py-40"></div>
        <div className="bg bg2 text-6xl py-48"></div>
        <div className="bg bg3 text-6xl py-56"></div>
      </div>
      <div className=" flex justify-center items-center flex-col">
        <h1 className="font-rale ">
          Creator's <hr className=" my-5 bg-black/50 text-black" />{" "}
        </h1>
      </div>

      <div className=" flex items-center justify-evenly mt-10 ">
        <div className="card card0">
          <div className="hoverBorder">
            <h2>Al Pacino</h2>
          </div>
        </div>
        <div>
          <p className=" text-black ">
            <span className="effect-shine">Krish</span>
          </p>
          <p className=" text-black ">
            <span className="effect-shine">Full Stack Web Developer</span>
          </p>
          <br />
          <ul className="flex justify-evenly ">
            <li>
              <span className="effect-shine">
                <a href="">
                  <FaCodepen />
                </a>
              </span>
            </li>
            <li>
              <span className="effect-shine">
                <a href="">
                  <FaPinterest />
                </a>
              </span>
            </li>
            <li>
              <span className="effect-shine">
                <a href="">
                  <FaInstagram />
                </a>
              </span>
            </li>
            <li>
              <span className="effect-shine">
                <a href="">
                  <FaLinkedin />
                </a>
              </span>
            </li>
            <li>
              <span className="effect-shine">
                <a href="">
                  <FaTwitter />
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="card card1">
          <div className="hoverBorder">
            <h2>Ben Stiller</h2>
          </div>
        </div>
      </div> */}
    </>
  );
}
