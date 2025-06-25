import React from 'react';
import './CardFront.css';

// Color definitions
const RARITY_COLORS = {
  COMMON: {
    border: '#9CA3AF',
    border2: '#4b5563',
    text: '#374151'
  },
  RARE: {
    border: '#3b82f6',
    border2: '#1e40af',
    text: '#1e40af'
  },
  EPIC: {
    border: '#8b5cf6',
    border2: '#5b21b6',
    text: '#5b21b6'
  },
  MYTHIC: {
    border: '#ec4899',
    border2: '#9d174d',
    text: '#9d174d'
  },
  LEGENDARY: {
    border: '#3B82F6',
    border2: '#EC4899',
    text: '#d24ad0'
  }
};

// Font manager functions
const getGlyphFont = (bold, italic, serif) => {
  return serif ? "'Noto Serif', serif" : "'Noto Sans', sans-serif"
};

const getNameFont = (bold, italic, serif) => {
  return serif ? "'Noto Serif', serif" : "'Noto Sans', sans-serif"
};

const CardFront = ({ glyph, name, unicode, rarity, bold, italic, serif }) => {
  const rarityNormalized = rarity.toUpperCase();
  const colors = RARITY_COLORS[rarityNormalized] || RARITY_COLORS.COMMON;
  
  // Create gradient styles based on rarity
  const borderGradient = `linear-gradient(135deg, ${colors.border}, ${colors.border2})`;
  const bgTintGradient = `linear-gradient(180deg, transparent, ${colors.border}20)`;
  
  // Get the appropriate fonts based on card properties
  const glyphFontFamily = getGlyphFont(bold, italic, serif);
  const nameFontFamily = getNameFont(bold, italic, serif);
  
  // Font style for the glyph
  const glyphFontStyle = {
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: italic ? 'italic' : 'normal',
    fontFamily: glyphFontFamily
  };
  
  // Font style for the name
  const nameFontStyle = {
    fontFamily: nameFontFamily,
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: italic ? 'italic' : 'normal'
  };
  
  return (
    <div className="card-front" style={{ background: borderGradient }}>
      <div className="card-front-margin">
        <div className="card-front-content">
          <div className="glyph-container">
            <div 
              className="glyph" 
              style={{ 
                color: colors.text,
                ...glyphFontStyle
              }}
            >
              {glyph}
            </div>
            <div className="bg-tint" style={{ background: bgTintGradient }}></div>
          </div>
          
          <div className="card-info">
            <div 
              className="card-name" 
              style={{ 
                color: colors.text,
                ...nameFontStyle
              }}
            >
              {name}
            </div>
          </div>
          
          <div className="card-footer">
            <div 
              className="unicode-code" 
              style={{ 
                color: `${colors.text}80`,
                fontFamily: "'Noto Sans Mono', monospace"
              }}
            >
              {unicode}
            </div>
            <div 
              className="rarity-text" 
              style={{ 
                color: `${colors.text}80`,
                fontFamily: "'Noto Sans Mono', monospace"
              }}
            >
              {rarityNormalized.charAt(0).toUpperCase() + rarityNormalized.slice(1).toLowerCase()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;