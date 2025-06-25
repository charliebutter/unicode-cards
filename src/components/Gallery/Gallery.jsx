import React, { useState } from 'react';
import Card from '../Card/Card.jsx';
import './Gallery.css';

const Gallery = ({ characters, fontStyles }) => {
  
  const rarityOrder = ['LEGENDARY', 'MYTHIC', 'EPIC', 'RARE', 'COMMON'];

  const sortedCharacters = Object.entries(characters)
    .map(([unicode, data]) => ({
      unicode,
      ...data
    }))
    .sort((a, b) => {
      const rarityA = rarityOrder.indexOf(a.rarity);
      const rarityB = rarityOrder.indexOf(b.rarity);
      
      if (rarityA !== rarityB) {
        return rarityA - rarityB;
      }

    });

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {sortedCharacters.map((character) => (
          <div key={character.unicode} className="gallery-item">
            <Card 
              data={{
                ...character,
                bold: fontStyles?.bold || character.bold,
                italic: fontStyles?.italic || character.italic,
                serif: fontStyles?.serif || character.serif
              }}
              size="small"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;