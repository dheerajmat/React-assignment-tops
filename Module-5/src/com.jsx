import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

function YourComponent() {
  return (
    <div>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Montserrat',
            weights: [400],
          },
        ]}
      />
      <h1 className="p-5 font-montserrat">Dheeraj x NIKE</h1>
    </div>
  );
}

export default YourComponent;

