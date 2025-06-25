import React, { useState } from 'react';
import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import DataSelector from './components/DataSelector/DataSelector.jsx';
import latinData from './data/latin.json';
import greekData from './data/greek.json';

const availableDatasets = [
  { key: 'latin', name: 'Latin', data: latinData },
  { key: 'greek', name: 'Greek + Cyrillic', data: greekData }
];

function App() {
  const [currentDataset, setCurrentDataset] = useState('latin');
  const [fontStyles, setFontStyles] = useState({
    bold: false,
    italic: false,
    serif: false
  });
  
  const getCurrentData = () => {
    const dataset = availableDatasets.find(d => d.key === currentDataset);
    return dataset ? dataset.data : latinData;
  };

  const handleFontStyleChange = (style, value) => {
    setFontStyles(prev => ({
      ...prev,
      [style]: value
    }));
  };

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <DataSelector 
          availableDatasets={availableDatasets}
          currentDataset={currentDataset}
          onDatasetChange={setCurrentDataset}
          fontStyles={fontStyles}
          onFontStyleChange={handleFontStyleChange}
        />
      </div>
      <Gallery characters={getCurrentData()} fontStyles={fontStyles} />
    </div>
  )
}

export default App