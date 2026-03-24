 import React from 'react';
import { useLoaderData } from 'react-router';

const Apps = () => {
  const data = useLoaderData(); 
//  console.log(data.length)
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#1e293b]">Our All Applications</h2>
      <h6 className="  text-center mb-10 text-[#1e293b]">Explore All Apps on the Market developed by us. We code for Millions</h6>
     <div className='flex justify-between'>
      <div className="text-2xl font-bold   mb-10 text-[#1e293b]">({data.length}) Apps Found</div>
      <div>
        <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
      </div>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((app) => (
          <div key={app.id} className="card bg-base-100 shadow-xl border border-gray-100">
            <figure className="px-4 pt-4">
              <img src={app.image || 'https://via.placeholder.com/150'} alt={app.name} className="rounded-xl  w-45 object-cover" />
            </figure>
            <div className="card-body">
               <h3 className="text-xl font-bold">{app.title}</h3>
             <div className="flex justify-between gap-20">   
                     <p>⭐ {app.ratingAvg}</p>
              <p>⬇️ {app.downloads.toLocaleString()}</p>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;