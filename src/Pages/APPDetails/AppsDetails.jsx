 import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
  const allData = useLoaderData();
  const { id } = useParams();

  // ID অনুযায়ী নির্দিষ্ট অ্যাপটি খুঁজে বের করা
  const app = allData ?.find((item) => item.id === parseInt(id));

  if (!app) {
    return <div className="text-center py-20 text-2xl">App Not Found!</div>;
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        {/* Header Section: Icon and Details */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* App Icon */}
          <div className="w-full md:w-72 h-72 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4">
            <img 
              src={app.image || "https://via.placeholder.com/300"} 
              alt={app.title} 
              className="w-full h-full object-contain" 
            />
          </div>

          {/* App Stats */}
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-[#1e293b] mb-2">{app.title}</h1>
            <p className="text-[#8b5cf6] font-medium mb-8">Developed by productive.io</p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm flex items-center gap-1">⬇️ Downloads</p>
                <p className="text-2xl font-black text-gray-800">{app.downloads || "8M"}</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm flex items-center gap-1">⭐ Avg Ratings</p>
                <p className="text-2xl font-black text-gray-800">{app.ratingAvg || "4.9"}</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm flex items-center gap-1">💬 Total Reviews</p>
                <p className="text-2xl font-black text-gray-800">54K</p>
              </div>
            </div>

            <button className="bg-[#00d084] hover:bg-[#00b975] text-white px-10 py-3.5 rounded-xl font-bold text-lg shadow-lg transition-transform transform hover:scale-105">
              Install Now ({app.size || "291 MB"})
            </button>
          </div>
        </div>

        <hr className="my-12 border-gray-100" />

        {/* Ratings Bars Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1e293b]">Ratings</h2>
          <div className="space-y-4 max-w-5xl">
            {[
              { star: 5, width: "85%", count: "11,500" },
              { star: 4, width: "55%", count: "6,200" },
              { star: 3, width: "25%", count: "2,800" },
              { star: 2, width: "15%", count: "1,100" },
              { star: 1, width: "5%", count: "400" },
            ].map((r) => (
              <div key={r.star} className="flex items-center gap-4">
                <span className="w-12 text-sm font-medium text-gray-500 whitespace-nowrap">{r.star} star</span>
                <div className="flex-1 bg-gray-100 h-5 rounded-full overflow-hidden">
                  <div 
                    className="bg-orange-500 h-full rounded-full transition-all duration-1000" 
                    style={{ width: r.width }}
                  ></div>
                </div>
                <span className="w-16 text-sm text-gray-400 text-right">{r.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 text-[#1e293b]">Description</h2>
          <div className="text-gray-600 leading-relaxed text-lg space-y-6">
            <p>
              {app.description || "This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration."}
            </p>
            <p>
              A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific session, making your schedule more structured. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;