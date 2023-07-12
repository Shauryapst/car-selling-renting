import React from "react";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { UserSection } from "./components/UserSection/UserSection";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="barwrapper">
      <div className="bar flex">
        <SearchBox />
        <UserSection />
      </div>
    </div>
  );
};
export default SearchBar;
