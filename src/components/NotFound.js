import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

function NotFound() {
  return (
    <div className="my-5 d-flex justify-content-center flex-column">
      <h1 className="text-center">
        <FaExclamationCircle />
      </h1>
      <h1 className="text-center">404 Not Found</h1>
    </div>
  );
}

export default NotFound;
