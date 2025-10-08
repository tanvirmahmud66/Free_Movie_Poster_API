import React from "react";
import { Film, Search } from "lucide-react";

export default function Navbar({ search, setSearch, children }) {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left Section: Logo + Menu */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Film className="text-cyan-400 w-6 h-6" />
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Film<span className="text-cyan-400">Grid</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden sm:flex items-center gap-5 text-gray-300 text-sm font-medium">
            <a href="#" className="hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Top Rated
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Upcoming
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Genres
            </a>
          </nav>
        </div>

        {/* Right Section: Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-800 text-gray-100 placeholder-gray-500 pl-10 pr-4 py-2 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          />
        </div>
      </div>

      
    </header>
  );
}
