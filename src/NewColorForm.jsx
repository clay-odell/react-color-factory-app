import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import colorsData from '../colors.json';  // Import the JSON file

function NewColorForm() {
  const [colorName, setColorName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const colors = colorsData[0].colors;  
    const lowerCaseColorName = colorName.toLowerCase();
    const colorCode = colors[lowerCaseColorName];

    if (colorCode) {
      
      navigate('/colors', { state: { newColor: { name: lowerCaseColorName, code: colorCode } } });
    } else {
      navigate('/colors/nope', { state: { color: lowerCaseColorName } });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Color Name: <br />
        <input 
          type="text" 
          value={colorName} 
          onChange={(e) => setColorName(e.target.value)} 
        />
      </label>
      <br />
      <button type="submit">Add Color</button>
      <button onClick={() => navigate('/colors')}>Go Back</button>
    </form>
  );
}

export default NewColorForm;
