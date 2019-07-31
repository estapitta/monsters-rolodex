import React from "react";
import "../search-box/search-box.styles.css";
//functional components do not have state and do not have access to lifecycle methods
// they have props

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    /* we want to create a search field, type search and placeholder for always display that text */
    // make it dynamic instead of simple search monsters should be more generic (props)
    // passing placeholder, and the value comes from the props which we have destructuring as well
    // as handleChange
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
