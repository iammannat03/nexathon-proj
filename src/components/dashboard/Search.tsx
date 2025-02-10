import React from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <SearchIcon className="absolute left-3 size-4 text-gray-400" />
        <Input
          placeholder="Search..."
          className="h-10 w-full pl-10 pr-4 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white"
        />
      </div>
    </div>
  );
};

export default Search;
