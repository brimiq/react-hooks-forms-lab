import React from "react";

function Filter({ onCategoryChange, onSearchChange }) {
  function handleCategoryChange(e) {
    onCategoryChange(e.target.value);
  }

  function handleSearchChange(e) {
    onSearchChange(e.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
