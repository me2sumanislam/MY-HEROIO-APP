 import React, { useEffect, useState } from "react";

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Data.json")   
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
   
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center mt-10">Trending Apps</h2>
      <p className="text-center ">Explore All Trending Apps on the Market developed by us</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
        {data.slice(0, 8).map((app) => {
          const { image, title, ratingAvg, downloads, id,  } = app;
          console.log(image)
          return (
            <div key={id} className="border p-4 rounded-xl">
              <img
                src={image}       
                alt={title}
                className="w-45  object-cover"
              />
              <h3 className="text-xl font-bold">{title}</h3>
             <div className="flex justify-between">   
                     <p>⭐ {ratingAvg}</p>
              <p>⬇️ {downloads.toLocaleString()}</p>
             </div>
            </div>
            
          );
        
        })}
      </div>
    </div>
    
  );
};

export default Trending;