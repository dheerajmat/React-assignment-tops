import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Content() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p>This is some content.</p>
      <p style={{ color: theme.color }}>Themed content.</p>
    </div>
  );
}

export default Content;