 import React from "react";
import { toast } from "react-toastify";

const AppInfo = ({ 
  app, 
  installedApps, 
  addToInstallList, 
  removeFromInstallList, 
  navigate 
}) => {

  const isInstalled = installedApps?.some(
    (item) => Number(item.id) === Number(app.id)
  );

  const handleInstall = () => {
    addToInstallList(app);
    toast.success("Install Successful ✅", {
      position: "top-right",
      autoClose: 1500,
      theme: "colored",
    });

    setTimeout(() => {
      navigate("/installation");
    }, 1200);
  };

  const handleUninstall = () => {
    removeFromInstallList(Number(app.id));
    toast.success("Uninstall Successful ✅", {
      position: "top-right",
      autoClose: 1500,
      theme: "colored",
    });
  };

  return (
    <div className="flex-1">
      <h1 className="text-4xl font-extrabold text-[#1e293b] mb-2">
        {app.title}
      </h1>
      <p className="text-[#8b5cf6] font-medium mb-8">
        Developed by productive.io
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div>
          <p className="text-gray-400 text-sm">⬇️ Downloads</p>
          <p className="text-2xl font-black">{app.downloads || "8M"}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">⭐ Avg Ratings</p>
          <p className="text-2xl font-black">{app.ratingAvg || "4.9"}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">💬 Reviews</p>
          <p className="text-2xl font-black">54K</p>
        </div>
      </div>

      {/* Install Button */}
      <div className="mb-12">
        {!isInstalled ? (
          <button
            onClick={handleInstall}
            className="bg-[#00d084] hover:bg-[#00b975] text-white px-10 py-3.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg"
          >
            Install Now ({app?.size || "291"} MB)
          </button>
        ) : (
          <button
            onClick={handleUninstall}
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 py-3.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg"
          >
            Uninstall App
          </button>
        )}
      </div>

      {/* Ratings */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Ratings</h2>

        {[5, 4, 3, 2, 1].map((star) => {
          const percentage = [82, 68, 25, 10, 4][5 - star];

          return (
            <div key={star} className="flex items-center gap-4 mb-5">
              <span className="w-10 font-semibold text-gray-700">
                {star}star 
              </span>

              <div className="flex-1 bg-gray-100 h-4 rounded-xl overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-xl"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <span className="w-12 text-right text-sm font-medium text-gray-600">
              
              </span>
            </div>
          );
        })}

        {/*  SCALE (0 - 12000) */}
        <div className="mt-8 px-2">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>0</span>
            <span>3000</span>
            <span>6000</span>
            <span>9000</span>
            <span>12000</span>
          </div>

          <div className="h-[2px] bg-gray-300 w-full rounded-full"></div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-[#1e293b]">Description</h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {app.description || 
            "This focus app builds a complete environment for deep work."}
        </p>
      </div>
    </div>
  );
};

export default AppInfo;