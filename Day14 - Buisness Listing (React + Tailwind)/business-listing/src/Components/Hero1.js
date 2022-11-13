import React from "react";
import { FaHeart } from 'react-icons/fa';

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
        <div className="flex items-center justify-between my-5">
            <div className="flex flex-col text-start text-black ">
                <p className="text-6xl ">Discover <span className=" text-blue-600 font-quick font-bold text-9xl">Business </span>
                that people Love </p>
                <p className="text-xl my-24">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis amet quod itaque necessitatibus quisquam repellat tempore corporis explicabo quas earum velit, sapiente deleniti sed aliquid nobis ipsum quia quidem obcaecati, magni animi autem, neque voluptatem soluta sint. Nisi, dolores. Adipisci.</p>
            </div>
          <img src={props.hero} alt="" />
        </div>
      </div> 
    </div>  
  );
}
