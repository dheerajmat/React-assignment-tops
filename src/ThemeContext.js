// ThemeContext.js
import React from 'react';

const ThemeContext = React.createContext();

export const themes = {
  dark: {
    background: '#333',
    color: '#fff',
  },
  light: {
    background: '#fff',
    color: '#333',
  },
};

export default ThemeContext;
