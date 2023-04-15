import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center p-20">
      <h1 className="text-4xl">404</h1>
      <span>
        Go Back{" "}
        <Link to="/" className="text-blue-500">
          Home
        </Link>
      </span>
    </div>
  );
};

export default Error;
