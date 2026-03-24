 import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";  

const Trending = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();  
  useEffect(() => {
    fetch("/Data.json") 
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-2 text-center mt-10 text-[#1e293b]">Trending Apps</h2>
      <p className="text-center text-gray-500 mb-10">Explore All Trending Apps on the Market developed by us</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {data.slice(0, 8).map((app) => {
          const { image, title, ratingAvg, downloads, id } = app;
          
          return (
            <div 
              key={id} 
              onClick={() => navigate(`/app/${id}`)}  
              className="border p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all cursor-pointer bg-white group"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={image || "https://via.placeholder.com/150"} 
                  alt={title}
                  className="w-32 h-32 object-contain rounded-2xl group-hover:scale-105 transition-transform"
                />
              </div>
              
              <h3 className="text-xl font-bold text-[#1e293b] mb-3 truncate">{title}</h3>
              
              <div className="flex justify-between items-center text-sm font-medium"> 
                <p className="text-orange-500 flex items-center gap-1">
                  ⭐ {ratingAvg}
                </p>
                <p className="text-gray-400 flex items-center gap-1">
                  ⬇️ {downloads?.toLocaleString()}
                </p>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;