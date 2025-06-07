import React, { memo, useState } from 'react';

const Child = memo(({ message }) => {
  console.log('Child rendered');
  return <h3>{message}</h3>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase: {count}</button>
      <Child message="I never change!" />
    </div>
  );
};

export default Parent;