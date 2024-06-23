import React, { useState } from 'react';

const GroupPanel = ({ setGroupBy }) => {
  const [selectedGroup, setSelectedGroup] = useState('');

  const handleGroupChange = (e) => {
    setSelectedGroup(e.target.value);
    setGroupBy(e.target.value ? [e.target.value] : []);
  };

  return (
    <div className="group-panel">
      <select value={selectedGroup} onChange={handleGroupChange}>
        <option value="">None</option>
        <option value="category">Category</option>
        <option value="subcategory">Subcategory</option>
      </select>
    </div>
  );
};

export default GroupPanel;
