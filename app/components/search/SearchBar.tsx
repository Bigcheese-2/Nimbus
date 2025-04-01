"use client";
import React, { useState } from "react";
import { Search, Loader2 } from "lucide-react";

interface SearchBarProps {
  onSearch: (city: string) => void;
  loading: boolean;
}

export default function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [city, setCity] = useState<string>("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <div className="flex border border-[#695D5D] max-w-72 rounded-xl p-2 items-center gap-2">
        <Search className="h-4 w-4 text-white" />
        <input
          type="text"
          placeholder="Search location..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="text-base text-white font-light outline-none bg-transparent"
        />
      </div>
      <button
        onClick={handleSearch}
        disabled={loading}
        className="bg-[#AD36CB] text-white py-1 px-6 rounded-lg cursor-pointer hover:brightness-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2 text-white">
            <Loader2 className="h-4 w-4 animate-spin text-white" />
            Loading
          </span>
        ) : (
          "Search"
        )}
      </button>
    </div>
  );
}
