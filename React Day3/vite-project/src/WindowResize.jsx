import React, { useState, useEffect } from "react";

const WindowResize = () => {
  const [widthCount, setWidthCount] = useState(window.innerWidth);

  useEffect(() => {
    const updatedWidth = () => {
      setWidthCount(window.innerWidth);
    };

    window.addEventListener("resize", updatedWidth);

    return () => {
      window.removeEventListener("resize", updatedWidth);
    };
  }, []);

  return (
    <div className="page">
      <h1>Window Resize Example</h1>
      <p>Current browser width updates automatically.</p>

      <div className="card">
        <h2>{widthCount}px</h2>
      </div>
    </div>
  );
};

export default WindowResize;