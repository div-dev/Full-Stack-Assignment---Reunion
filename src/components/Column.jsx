import React from 'react';

const ColumnVisibilityPanel = ({ setColumnVisibility }) => {
  const handleToggle = (column) => {
    setColumnVisibility(prev => ({ ...prev, [column]: !prev[column] }));
  };

  return (
    <div className="column-visibility-panel">
      <button onClick={() => handleToggle('id')}>Toggle ID Column</button>
      <button onClick={() => handleToggle('name')}>Toggle Name Column</button>
      {/* Add buttons for other columns */}
    </div>
  );
};

export default ColumnVisibilityPanel;
