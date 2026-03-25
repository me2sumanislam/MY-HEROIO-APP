 
import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { useInstall } from "../context/InstallContext";
import AppInfo from "../AppInfo/AppInfo";  

const AppDetails = () => {
  const allData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToInstallList, removeFromInstallList, installedApps } = useInstall();

  const app = allData?.find((item) => Number(item.id) === Number(id));

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold text-red-500">App Not Found!</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10">
          
          {/* Left Side - App Icon */}
          <div className="w-full md:w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-8 flex-shrink-0">
            <img
              src={app.image || "https://via.placeholder.com/300"}
              alt={app.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Side - All Information */}
          <AppInfo 
            app={app} 
            installedApps={installedApps}
            addToInstallList={addToInstallList}
            removeFromInstallList={removeFromInstallList}
            navigate={navigate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppDetails;