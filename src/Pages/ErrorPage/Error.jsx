import React from "react";
import { Link } from "react-router-dom"; 

const Error = () => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center text-center py-20 text-gray-400 min-h-screen">
      <img
        src="/src/assets/error-404.png"
        alt="404 Error"
        className="w-80 h-auto mb-8 mx-auto"
      />

      <Link
        to="/"
        className="btn bg-[#8b5cf6] hover:bg-[#7c3aed] text-white px-10 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg no-underline"
      >
         Go Back !
      </Link>
    </div>
  );
};

export default Error;
