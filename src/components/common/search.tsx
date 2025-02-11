import React from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { Label } from "../ui/label";

type Props = {
  placeholder: string;
};

const Search = ({ placeholder }: Props) => {
  return (
    <Label
      htmlFor="search-input"
      className="border rounded-md flex justify-center items-center px-2 w-full"
    >
      <span>
        <SearchIcon />
      </span>
      <Input
        id="search-input"
        className=" border-none focus-visible:outline-none focus-visible:ring-0"
        placeholder={placeholder}
      />
    </Label>
  );
};

export default Search;
