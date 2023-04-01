import React, { useState } from "react";

const Numbers = ({ numbers }) => {
  const [num, setNum] = useState(0);
  const stop = setTimeout(() => {
    if (num === numbers) {
      clearTimeout(stop);
      return;
    }
    setNum(num + 1);
  }, 0.5);

  return <h4>{num}</h4>;
};

export default Numbers;
