import React from "react";
// Styling

export default function SearchBar(props) {
  return (
    <div>
      <input
        className="searchBar"
        placeholder="Search for a cookie name"
        onChange={(event) => props.setQuery(event.target.value)}
      />
    </div>
  );
}
