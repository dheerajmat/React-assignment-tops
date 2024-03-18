import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemeToggle({ toggleTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;