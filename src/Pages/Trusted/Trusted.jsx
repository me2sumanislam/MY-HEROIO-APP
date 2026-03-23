import React from "react";

const Trusted = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-16 px-4 ">
      
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Trusted By Millions, Built For You
      </h2>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        
        {/* Card 1 */}
        <div>
          <p className="text-sm opacity-80">Total Downloads</p>
          <h1 className="text-4xl md:text-6xl font-bold my-2">29.6M</h1>
          <p className="text-sm opacity-70">
            21% More Than Last Month
          </p>
        </div>

        {/* Card 2 */}
        <div>
          <p className="text-sm opacity-80">Total Reviews</p>
          <h1 className="text-4xl md:text-6xl font-bold my-2">906K</h1>
          <p className="text-sm opacity-70">
            46% More Than Last Month
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <p className="text-sm opacity-80">Active Apps</p>
          <h1 className="text-4xl md:text-6xl font-bold my-2">132+</h1>
          <p className="text-sm opacity-70">
            31 More Will Launch
          </p>
        </div>

      </div>
    </div>
  );
};

export default Trusted;