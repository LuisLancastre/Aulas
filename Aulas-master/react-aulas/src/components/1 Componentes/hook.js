import React, { useState } from "react";

export const Contador = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <div>Contador: {clicks}</div>
      <button onClick={() => setClicks(clicks - 1)}> - </button>
      <button onClick={() => setClicks(clicks + 1)}> + </button>
    </div>
  );
};
