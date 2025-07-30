
import React, { useState } from "react";
import Button from "./Button";

const ContainerComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button handleClick={handleClick} />
    </div>
  );
};

export default ContainerComponent;
