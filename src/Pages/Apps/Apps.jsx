 import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Search from '../Search/Search';  

const Apps = () => {
  const data = useLoaderData(); 
  const [searchTerm, setSearchTerm] = useState('');

   
  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-2 text-[#1e293b]">Our All Applications</h2>
      <h6 className="text-center mb-10 text-[#1e293b]">Explore All Apps on the Market developed by us. We code for Millions</h6>
      
      <div className='flex flex-col md:flex-row justify-between items-center mb-10 gap-4'>
        
        <div className="text-2xl font-bold text-[#1e293b]">
          ({filteredApps.length}) Apps Found
        </div>
        
      
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <div key={app.id} className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              <figure className="px-4 pt-4">
                <img 
                  src={app.image || 'https://via.placeholder.com/150'} 
                  alt={app.title} 
                  className="rounded-xl w-45 object-cover" 
                />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-bold text-[#1e293b]">{app.title}</h3>
                <div className="flex justify-between items-center mt-2">   
                  <p className="font-semibold text-orange-500">⭐ {app.ratingAvg}</p>
                  <p className="text-gray-500 text-sm">⬇️ {app.downloads?.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
         
          <div className="col-span-full text-center py-20 text-gray-400 text-xl">
            No apps found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;