 import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { useInstall } from "../context/InstallContext";
import { toast } from "react-toastify";

const AppDetails = () => {
  const allData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToInstallList, removeFromInstallList, installedApps } = useInstall();

  const apps = allData?.find((item) => Number(item.id) === Number(id));

  const isInstalled = installedApps?.some(
    (item) => Number(item.id) === Number(id)
  );

  if (!apps) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold text-red-500">App Not Found!</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-500 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Install
  const handleInstall = () => {
    addToInstallList(apps);

    toast.success("Install Successful ✅", {
      position: "top-right",
      autoClose: 1500,
      theme: "colored",
    });

    setTimeout(() => {
      navigate("/Installation");
    }, 1000);
  };

  // Uninstall
  const handleUninstall = () => {
    removeFromInstallList(Number(apps.id));

    toast.success("Uninstall Successful ✅", {
      position: "top-right",
      autoClose: 1500,
      theme: "colored",
    });
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Image */}
          <div className="w-full md:w-72 h-72 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4">
            <img
              src={apps.image || "https://via.placeholder.com/300"}
              alt={apps.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-[#1e293b] mb-2">
              {apps.title}
            </h1>
            <p className="text-[#8b5cf6] font-medium mb-8">
              Developed by productive.io
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <p className="text-gray-400 text-sm">⬇️ Downloads</p>
                <p className="text-2xl font-black">{apps.downloads || "8M"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">⭐ Avg Ratings</p>
                <p className="text-2xl font-black">{apps.ratingAvg || "4.9"}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">💬 Reviews</p>
                <p className="text-2xl font-black">54K</p>
              </div>
            </div>

            {/* Button */}
            <div className="flex gap-4">
              {!isInstalled ? (
                <button
                  onClick={handleInstall}
                  className="bg-[#00d084] hover:bg-[#00b975] text-white px-10 py-3.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg"
                >
                  Install Now ({apps?.size || "291"} MB)
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
          </div>
        </div>

        <hr className="my-12 border-gray-100" />

        {/* Ratings */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1e293b]">Ratings</h2>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-4 mb-3">
              <span className="w-12 font-medium">{star} star</span>
              <div className="flex-1 bg-gray-100 h-4 rounded-full overflow-hidden">
                <div
                  className="bg-orange-500 h-full rounded-full"
                  style={{ width: `${(6 - star) * 15}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-[#1e293b]">Description</h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {apps.description || "This focus app builds a complete environment for deep work."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;