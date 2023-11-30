import React, { useState, useEffect } from 'react';

function ComponentLifecycle() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Mounted...!");
    return () => {   
    };
  }, []);

  const inc = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      {count}
      <button onClick={inc}>Increment</button>
    </div>
  );
}

export default ComponentLifecycle;
