import React, { useState } from 'react';

const FilterPanel = ({ setGlobalFilter }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setGlobalFilter(e.target.value);
  };

  return (
    <div className="filter-panel">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search..."
      />
    </div>
  );
};

export default FilterPanel;
