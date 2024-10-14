import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div
      className="p-10 bg-gradient-to-br from-[#FF9100] via-[#FFAB00] to-[#FFDE4D]
    flex flex-col justify-center items-center text-white"
    >
      <h2 className="text-3xl font-bold">Browse all Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]">
          <Search className="text-[#FF9100]" />
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => onSearchInput(event.target.value)}
            className="bg-transparent w-full outline-none text-black placeholder-[#FF9100]/50"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
