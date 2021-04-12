import React from "react";
import { useHistory } from "react-router-dom";

const Error404 = () => {
  const history = useHistory();
  return (
    <div>
      <h1>404: page not found</h1>
      <button onClick={() => history.push("/")}>Go back </button>
    </div>
  );
};

export default Error404;
