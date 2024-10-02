import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // Intentional error: function missing 'setCount'
  const increment = () => {
    count = count + 1; // This will cause an error because you cannot directly modify state like this
  };

  // Incorrect comparison operator
  const handleReset = () => {
    if (count = 5) {  // This should be '===' for comparison, not '='
      setCount(0);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      {/* Missing closing tag */}
      <p>This is a counter component
    </div>
  );
}

export default Counter;
