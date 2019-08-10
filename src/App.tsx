import React, { FC, useState } from "react";
import styled from "styled-components";
import Number from "./Number";

const App: FC = () => {
  const [clicks, setClicks] = useState(0);
  const [value, setValue] = useState<Array<number>>([]);
  return (
    <div className="App">
      <Number count={clicks} />
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </div>
  );
};

export default App;
