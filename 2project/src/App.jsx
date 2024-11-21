import { useState } from 'react';

function App() {
  // Initialize counter state with 17
  const [counter, setCounter] = useState(17);

  // Function to increment counter
  const addValue = () => {
    setCounter(counter + 1);
  };

  // Function to decrement counter
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h2>React Course: {counter}</h2>
      <h2>Add Value: {counter}</h2>
      
      <button onClick={addValue}>Count Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
