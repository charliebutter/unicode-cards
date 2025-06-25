import React, { useState, useEffect } from 'react';
import CardFront from './CardFront.jsx';
import './Card.css';

const Card = ({ data, size = 'medium' }) => {
  const getCardName = () => {
    let cardName = data?.name || "Unknown";
    if (data?.italic) cardName = "Italic " + cardName;
    if (data?.bold) cardName = "Bold " + cardName;
    if (data?.serif) cardName = "Serif " + cardName;
    return cardName;
  };

  const getUnicode = () => {
    let unicode = data?.unicode || "U+????";
    let variants = "";
    if (data?.italic) variants += "I";
    if (data?.bold) variants += "B";
    if (data?.serif) variants += "S";
    if (variants) unicode += "•" + variants;
    return unicode;
  };

  return (
    <div
      className={`card card-${size}`}
    >
      <div>
        <CardFront
          glyph={data?.glyph || "?"}
          name={getCardName()}
          unicode={getUnicode()}
          rarity={data?.rarity || "COMMON"}
          bold={data?.bold || false}
          italic={data?.italic || false}
          serif={data?.serif || false}
        />
      </div>
    </div>
  );
};

export default Card;
