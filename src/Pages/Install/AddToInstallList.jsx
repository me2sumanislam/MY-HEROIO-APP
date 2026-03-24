 import React from 'react';
import { useInstall } from '../context/InstallContext'; // Context Hook import korun

const AddToInstallList = () => {
  // Context theke installedApps list ebong remove function-ti nilam
  const { installedApps, removeFromInstallList } = useInstall();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#1e293b] mb-3">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Explore All Trending Apps on the Market developed by us and manage your installations here.
        </p>
      </div>

      {/* List Header */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="font-bold text-xl text-[#1e293b]">
          {installedApps.length} Apps Found
        </h2>
      </div>

      {/* Apps List */}
      <div className="space-y-5">
        {installedApps.length > 0 ? (
          installedApps.map((app) => (
            <div 
              key={app.id} 
              className="flex items-center justify-between bg-white p-6 rounded-3xl shadow-sm border border-gray-100 transition-hover hover:shadow-md"
            >
              <div className="flex items-center gap-6">
                {/* App Icon */}
                <div className="w-20 h-20 bg-gray-50 rounded-2xl p-2 border border-gray-50">
                  <img 
                    src={app?.image || "https://via.placeholder.com/80"} 
                    alt={app.title} 
                    className="w-full h-full object-contain" 
                  />
                </div>
                
                {/* App Info */}
                <div>
                  <h3 className="font-bold text-[#1e293b] text-xl mb-1">{app.title}</h3>
                  <p className="text-sm text-gray-400 font-medium">
                    📥 {app?.downloads || '8M'}  |  ⭐ {app?.ratingAvg || '4.9'}  |  {app?.size || '291'} MB
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => removeFromInstallList(app.id)}
                className="bg-[#00d084] hover:bg-red-500 text-white px-8 py-2.5 rounded-xl font-bold transition-all active:scale-95"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          /* Empty State */
          <div className="text-center py-24 bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-200">
             <h2 className='text-3xl'>No apps install</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToInstallList;