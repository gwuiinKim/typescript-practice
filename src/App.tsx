import React, { FC, useState } from "react";

interface IState {
  initialValue: number;
}

const App: FC = () => {
  const [clicks, setClicks] = useState(0);
  const [value, setValue] = useState<Array<number>>([]);
  console.log(value);
  return (
    <div className="App">
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks + 1)}>+</button>
      <button onClick={() => setClicks(clicks - 1)}>-</button>
    </div>
  );
};

export default App;
