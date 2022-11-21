import {React} from "react";
import "../media/css/Footer.css";
import {
  FaPinterest,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub
} from "react-icons/fa";

export default function Hero2() {
  return (
    <div>
      
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-rale ">
          Creator <hr className=" my-5 bg-black/50 text-black" />
        </h1>
      </div>

      <div className=" flex items-center justify-evenly mt-10 flex-col">
        <div className="flex justify-start items-center">

          <div className="card card0">
            <div className="hoverBorder">
            </div>
          </div>
          
          <div className="mx-40">
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
                    <FaGithub />
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
        </div>

    </div>
  );
}

