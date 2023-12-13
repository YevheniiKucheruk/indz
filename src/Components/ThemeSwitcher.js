import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './actions';

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  return (
    <button onClick={toggleTheme} className={`theme-toggle-button ${theme === 'light' ? 'light' : 'dark'}`}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeSwitcher;
