import React from "react";
import "./Main.scss";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div className="main">
      <Outlet />
    </div>
  );
}
