import React from "react";
import "./Sidebar.scss";

import { NavLink } from "react-router-dom";
import { FaHome, FaBookmark, FaFire, FaPlus, FaHeart } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="container">
        <h1 className="logo sidebar__logo">
          mov <span>•</span> night
        </h1>
        <div className="sidebar__logo-icon">
          <span>logo</span>
        </div>
        <div className="sidebar__sections">
          <div className="sidebar__section sidebar__section--menu">
            <p className="sidebar__section__name">Menu</p>
            <div className="sidebar__section__items">
              <NavLink to={"/"} className={"sidebar__section__item"}>
                <FaHome />
                <span>home</span>
              </NavLink>

              <NavLink to={"/movies/favorite"} className={"sidebar__section__item"}>
                <FaHeart />
                <span>favorite</span>
              </NavLink>

              <NavLink to={"/movies/watchlist"} className={"sidebar__section__item"}>
                <FaBookmark />
                <span>watchlist</span>
              </NavLink>

              <NavLink to={"/movies/popular"} className={"sidebar__section__item"}>
                <FaFire />
                <span>popular</span>
              </NavLink>

              <NavLink to={"/movies/latest"} className={"sidebar__section__item"}>
                <FaPlus />
                <span>latest movies</span>
              </NavLink>
            </div>
          </div>
          <div className="sidebar__section sidebar__section--types">
            <p className="sidebar__section__name">types</p>
            <div className="sidebar__section__types">
              <button className="btn sidebar__section__types__btn">type 1</button>
              <button className="btn sidebar__section__types__btn">type 2</button>
              <button className="btn sidebar__section__types__btn">type 3</button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
