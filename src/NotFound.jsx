import React from 'react';
import { useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();
  const color = location.state?.color || 'No color';

  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <p>{color.toUpperCase()} does not exist in our database.</p>
    </div>
  );
}

export default NotFound;
