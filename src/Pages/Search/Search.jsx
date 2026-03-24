 import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full md:w-80">
      <label className="input flex items-center gap-2 border border-gray-300 p-2 rounded-xl bg-white shadow-sm focus-within:border-[#8b5cf6] transition-colors">
        <svg className="h-5 w-5 opacity-50 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input 
          type="search" 
          placeholder="Search by title..." 
          className="grow outline-none text-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </label>
    </div>
  );
};

export default Search;