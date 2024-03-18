// App.js
import React, { useState } from 'react';
import ThemeContext, { themes } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import Content from './Content';
import { SignInThree } from './Login';

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ background: theme.background, color: theme.color }}>
        <h1>Theme Toggler</h1>
        <ThemeToggle toggleTheme={toggleTheme} />
        <SignInThree/>
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
