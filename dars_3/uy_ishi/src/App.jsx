import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState(100);

  const handleFunc = () => {
    setState(state + 1);
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleFunc}>click</button>
    </div>
  );
};

export default App;
