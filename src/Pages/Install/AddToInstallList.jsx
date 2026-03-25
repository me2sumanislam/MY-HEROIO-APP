 import React, { useState, useMemo } from 'react';
import { useInstall } from '../context/InstallContext';

const AddToInstallList = () => {
  const { installedApps, removeFromInstallList } = useInstall();
  
  const [sortOption, setSortOption] = useState("");  
 
  const sortedApps = useMemo(() => {
    if (!sortOption) return [...installedApps];

    return [...installedApps].sort((a, b) => {
      const ratingA = parseFloat(a?.ratingAvg) || 0;
      const ratingB = parseFloat(b?.ratingAvg) || 0;

      if (sortOption === "high") {
        return ratingB - ratingA;  
      } else {
        return ratingA - ratingB;  
      }
    });
  }, [installedApps, sortOption]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
  
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#1e293b] mb-3">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Explore All Trending Apps on the Market developed by us and manage your installations here.
        </p>
      </div>

 
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="font-bold text-xl text-[#1e293b]">
          {sortedApps.length} Apps Found
        </h2>

        <details className="dropdown">
          <summary className="btn m-1">Sort by Rating</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-56 p-2 shadow-sm">
            <li>
              <a 
                onClick={() => setSortOption("high")}
                className={sortOption === "high" ? "active" : ""}
              >
                High to Low
              </a>
            </li>
            <li>
              <a 
                onClick={() => setSortOption("low")}
                className={sortOption === "low" ? "active" : ""}
              >
               Low to High
              </a>
            </li>
             
          </ul>
        </details>
      </div>

 
      <div className="space-y-5">
        {sortedApps.length > 0 ? (
          sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-6">
 
                <div className="w-20 h-20 bg-gray-50 rounded-2xl p-2 border border-gray-50">
                  <img
                    src={app?.image || "https://via.placeholder.com/80"}
                    alt={app.title}
                    className="w-full h-full object-contain"
                  />
                </div>

 
                <div>
                  <h3 className="font-bold text-[#1e293b] text-xl mb-1">
                    {app.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium">
                    📥 {app?.downloads || '8M'}  |  
                    ⭐ {app?.ratingAvg || '4.9'}  |  
                    {app?.size || '291'} MB
                  </p>
                </div>
              </div>

          
              <button
                onClick={() => removeFromInstallList(app.id, app.title)}
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-2.5 rounded-xl font-bold transition-all active:scale-95"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
    
          <div className="text-center py-24 bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-200">
            <h2 className="text-3xl text-gray-400">No apps installed yet</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToInstallList;