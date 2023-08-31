import React from "react";
import "./ErrorPage.scss";
import { Link } from "react-router-dom";
import errImg from "./error.svg";

export default function ErrorPage() {
  return (
    <div className="error-container">
      <img src={errImg} alt="" />
      <p>page not found.</p>
      <Link className="btn" to="">
        home
      </Link>
    </div>
  );
}
