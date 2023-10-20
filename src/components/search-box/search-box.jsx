import React from "react";
import "./seach-box.css";
function SearchBox({ onSearch, placeHolder }) {
  return (
    <div className="search-box__container">
      <input
        onChange={(e) => onSearch(e.target.value)}
        placeholder={placeHolder}
      ></input>
    </div>
  );
}

export default SearchBox;
