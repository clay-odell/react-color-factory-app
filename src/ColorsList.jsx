import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import colorsData from '../colors.json';
import './ColorsList.css';

function ColorsList() {
  const location = useLocation();
  const newColor = location.state?.newColor;
  const navigate = useNavigate();
  const [colors, setColors] = useState({});
  const [displayColors, setDisplayColors] = useState([]);

  useEffect(() => {
   
    const initialColors = { ...colorsData[0].colors };

    if (newColor) {
      const lowerCaseColorName = newColor.name.toLowerCase();
      if (initialColors[lowerCaseColorName]) {
       
        delete initialColors[lowerCaseColorName];
      }
      initialColors[lowerCaseColorName] = newColor.code;
    }
    setColors(initialColors);
  }, [newColor]);

  useEffect(() => {
    const everyFifthColor = Object.entries(colors)
      .filter((_, index) => (index + 1) % 5 === 0);
    
    if (newColor) {
      setDisplayColors([[newColor.name, newColor.code], ...everyFifthColor]);
    } else {
      setDisplayColors(everyFifthColor);
    }
  }, [colors]);

  return (
    <>
      <h1>Choose Any Color</h1>
      <button onClick={() => navigate('/colors/new')}>Add New Color</button>
      <ul>
        {displayColors.map(([colorName, colorCode]) => (
          <li key={colorName}>
            <Link to={`/color/${colorName}`} style={{ color: colorCode }}>
              {colorName}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ColorsList;
