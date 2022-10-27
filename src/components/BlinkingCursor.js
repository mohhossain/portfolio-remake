import React, { useState, useEffect } from "react";

function BlinkingCursor() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(!visible);
    }, 400);
  }, [visible]);
  return (
    <div>
      <h1>{visible ? "|" : ""}</h1>
    </div>
  );
}

export default BlinkingCursor;
