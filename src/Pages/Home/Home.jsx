import React from "react";
import Trusted from "../Trusted/Trusted";
import Trading from "../TradingApp/Trading";
import {  useLoaderData, useNavigate } from "react-router";
 import playStore  from "/src/assets/playstore.png"
 
 import appicon from "/src/assets/applelogo.png"
 
const Home = () => {
  const data = useLoaderData();
  const navigate = useNavigate()
  // console.log(data);
 
  return (

    <div>
      <div className="flex flex-col items-center text-center px-4 py-12 bg-gray-100">
        <h1 className="text-6xl md:text-7xl font-bold text-[#1e293b] leading-tight">
          We Build
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-[#8b5cf6]">Productive</span>{" "}
          <span className="text-[#1e293b]">Apps</span>
        </h2>
        <p className="max-w-2xl text-gray-500 text-lg leading-relaxed mb-10">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
 
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition-all">
            <img
              src={playStore} 
              alt="googleplay"
              className="h-6"
            />
            <span className="font-semibold text-gray-700">Google Play</span>
          </button>

          <button className="flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition-all">
            <img src={appicon}alt="AS" className="h-6" />
            <span className="font-semibold text-gray-700">App Store</span>
          </button>
        </div>
      </div>


      <div className="flex justify-center items-center ">
        <img src="/src/assets/hero.png" alt="" />
      </div>
              <Trusted></Trusted>
              <Trading data={data}></Trading>
              <div className="flex justify-center mt-10 w-full">
        <button 
          onClick={() => navigate('/apps')}  
          className="btn m-5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-10 py-2.5 rounded-lg"
        >
          Show All
        </button>
      </div>
    </div>
     
  );
};

export default Home;
