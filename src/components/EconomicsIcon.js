//libs
import React from 'react';

const EconomicsIcon = ({ itemName, color, onHover, unHover }) => {
  return (
    <svg
      width='180'
      height='180'
      viewBox='0 0 320 320'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onMouseEnter={() => onHover(itemName)}
      onMouseLeave={() => unHover()}
    >
      <rect width='180' height='180' fill='none' />
      <rect
        x='28'
        y='143.892'
        width='90.1238'
        height='19'
        transform='rotate(-38.3284 28 143.892)'
        fill={color}
      />
      <rect
        x='97.5045'
        y='88'
        width='90.1238'
        height='19'
        transform='rotate(23.2645 97.5045 88)'
        fill={color}
      />
      <rect
        x='159'
        y='128.192'
        width='115.103'
        height='19'
        transform='rotate(-48.2069 159 128.192)'
        fill={color}
      />
      <path
        d='M266.331 16.4669L260.161 62.8235L223.1 34.302L266.331 16.4669Z'
        fill={color}
      />
      <rect x='28' y='174' width='45' height='128' fill={color} />
      <rect x='83' y='144' width='45' height='158' fill={color} />
      <rect x='138' y='159' width='45' height='143' fill={color} />
      <rect x='193' y='141' width='45' height='161' fill={color} />
      <rect x='248' y='88' width='45' height='214' fill={color} />
    </svg>
  );
};

export default EconomicsIcon;
