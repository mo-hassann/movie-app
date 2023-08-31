import React from "react";
import "./Layout.scss";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout() {
  return (
    <div id="layout">
      <Navbar />
      <Main />
      <Sidebar />
    </div>
  );
}
