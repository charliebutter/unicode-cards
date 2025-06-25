import React from 'react';
import './DataSelector.css';

const DataSelector = ({ 
  availableDatasets, 
  currentDataset, 
  onDatasetChange,
  fontStyles,
  onFontStyleChange 
}) => {
  return (
    <div className="data-selector">
      <div className="data-selector-buttons">
        {availableDatasets.map(dataset => (
          <button
            key={dataset.key}
            className={`data-selector-button ${currentDataset === dataset.key ? 'active' : ''}`}
            onClick={() => onDatasetChange(dataset.key)}
          >
            {dataset.name}
          </button>
        ))}
      </div>
      
      <div className="font-style-controls">
        <button
          className={`font-style-button bold ${fontStyles.bold ? 'active' : ''}`}
          onClick={() => onFontStyleChange('bold', !fontStyles.bold)}
        >
          B
        </button>
        <button
          className={`font-style-button italic ${fontStyles.italic ? 'active' : ''}`}
          onClick={() => onFontStyleChange('italic', !fontStyles.italic)}
        >
          I
        </button>
        <button
          className={`font-style-button serif ${fontStyles.serif ? 'active' : ''}`}
          onClick={() => onFontStyleChange('serif', !fontStyles.serif)}
        >
          S
        </button>
      </div>
    </div>
  );
};

export default DataSelector;