import React, { useState, useMemo } from 'react';

function UseMemoCode() {
  const [number, setNumber] = useState(0);

  
  const squared = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  return (
    <>
      <h2>Square Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <p>Square: {squared}</p>
    </>
  );
}

export default UseMemoCode;
