import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ThemeStyles = () => {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.classList.remove('light', 'dark'); 
    document.body.classList.add(theme); 
  });

  return null; 
};

export default ThemeStyles;
