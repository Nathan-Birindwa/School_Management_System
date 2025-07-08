"use client";
import { useState } from "react";
import { CircleUserRound, Bell, Search } from "lucide-react";

export default function Nav() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="w-full fixed bg-[#161b22] flex justify-between items-center py-4 px-4">
      {/* Logo */}
      <div className="text-[#e6edf3]">
        <h1 className="text-2xl font-bold">Admin Portal</h1>
      </div>

      {/* Nav Items */}
      <div className="flex gap-4 text-[#e6edf3] items-center">
        {/* Search - always visible on desktop, toggleable on mobile */}
        <div className="hidden md:flex rounded-[9px] mr-6 bg-[#0d1117]">
          <input
            type="text"
            className="px-5 py-1 focus:outline-0 rounded-[9px] bg-[#0d1117]"
            placeholder="Search anything"
          />
          <Search className="mt-1 mr-2" />
        </div>

        {/* Mobile search toggle */}
        <button
          className="cursor-pointer md:hidden"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <Search />
        </button>

        <button className="cursor-pointer">
          <Bell />
        </button>
        <button className="cursor-pointer">
          <CircleUserRound />
        </button>
      </div>

      {/* Mobile Search Dropdown */}
      {searchOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#161b22] px-4 py-4 z-50 md:hidden shadow-lg">
          <div className="flex rounded-[9px] bg-[#0d1117]">
            <input
              type="text"
              className="px-5 py-1 focus:outline-0 rounded-[9px] bg-[#0d1117] text-[#e6edf3] w-full"
              placeholder="Search anything"
              autoFocus
            />
            <Search className="mt-1 mr-2 text-[#e6edf3]" />
          </div>
        </div>
      )}
    </nav>
  );
}
