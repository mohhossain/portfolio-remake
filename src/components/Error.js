import React from "react";

function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>
        I am pretty sure I did not create a page for this route. But here is a
        of a cute cat:
      </h2>
      <img src="https://cataas.com/cat/gif" alt="cute cat" />
    </div>
  );
}

export default Error;
