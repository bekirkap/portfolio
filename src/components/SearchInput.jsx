import React from "react";
import { searchIcon } from "../helpers/icons";

const SearchInput = ({setSearch}) => {
  return (
    <div className="">
      <div className="relative w-6/12 mx-auto">
        <input
        onChange={(e)=>setSearch(e.target.value)}
          type="search"
          id="default-search"
          className="block outline-none w-full p-4 pl-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-gray-900  focus:text-black"
          placeholder="Search products..."
        />
        <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
          {searchIcon}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
