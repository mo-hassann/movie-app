import React from "react";
import { Link } from "react-router-dom";

export default function Error({ message, link }) {
  return (
    <div className="error-container">
      <h1>:(</h1>
      <p>{message || "There is an error"}</p>
      <Link className="btn" to={link || "/"}>
        retry
      </Link>
    </div>
  );
}
