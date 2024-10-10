import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import colorsData from '../colors.json';

const Color = () => {
  const { colorName } = useParams();
  const navigate = useNavigate();
  const colors = colorsData[0].colors; 
  const colorCode = colors[colorName.toLowerCase()]; 

  if (!colorCode) {
    return <Navigate to="/colors/nope" state={{ color: colorName }} />;
  }

  return (
    <div>
      <h1>{colorName}</h1>
      <div style={{ backgroundColor: colorCode, height: '500px', width: '500px' }}></div>
      <p>HexCode for <span style={{color: colorCode}}>{colorName}</span>: {colorCode.toUpperCase()}</p>
      <button onClick={() => navigate('/colors')}>Go Back</button>
    </div>
  );
};

export default Color;
