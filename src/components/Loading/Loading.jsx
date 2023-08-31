import React from "react";
import "./Loading.scss";
import { ReactComponent as Spinner } from "./spinner.svg";

export default function Loading() {
  return (
    <div className="loading-container">
      <Spinner className="icon" />
    </div>
  );
}
