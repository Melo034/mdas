import { useState } from 'react'
import './App.css'
import MdaItem from './Components/MdaItem';
import mdasData from './Components/data/mdas.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMdas = mdasData.filter(mda =>
    mda.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-screen-w-2xl mx-auto p-4">
      <div className="relative w-fit mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center relative px-6 py-2 border-4 border-green-600 bg-white shadow-lg">
          Sierra Leone MDA Directory
        </h1>
        <div className="absolute inset-0 -z-10 border-4 border-neutral-200 rounded-md translate-x-2 translate-y-2"></div>
        <div className="absolute inset-0 -z-20 border-4 border-blue-600 rounded-md translate-x-4 translate-y-4"></div>
      </div>
      <label htmlFor="search" className="sr-only">Search by MDA name</label>
      <div className="flex justify-center w-full my-10">
        <div className="relative w-[300px]">
          {/* Main Layer (Green Border) */}
          <div className="flex items-center space-x-2 border-2 border-green-600 rounded-md p-2 relative bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              id="search"
              className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
              type="text"
              placeholder="Search Mdas"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="absolute inset-0 -z-10 border-2 border-neutral-200 rounded-md translate-x-2 translate-y-2"></div>
          <div className="absolute inset-0 -z-20 border-2 border-blue-600 rounded-md translate-x-4 translate-y-4"></div>
        </div>
      </div>
      {filteredMdas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredMdas.map(mda => (
            <MdaItem key={mda.name} mda={mda} />
          ))}
        </div>
      ) : (
        <p>No MDAs found matching your search.</p>
      )}
    </div>
  );
}
export default App
