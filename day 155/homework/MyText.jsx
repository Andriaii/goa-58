import React from "react";

const MyText = () => {
  console.log("MyText component rendered");
  return <h2>Hello From React</h2>;
};

export default React.memo(MyText);
