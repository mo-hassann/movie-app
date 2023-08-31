import React from "react";
import "./Navbar.scss";

import { FaSearch } from "react-icons/fa";
import userImg from "./user.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <form className={`search-form`}>
          <input className="search-form__input" placeholder="Search..." type="text" />
          <button type="submit" className="btn search-form__btn">
            <FaSearch />
          </button>
        </form>
        <div className="user">
          <div className="user__img">
            <img src={userImg} alt="user" />
          </div>
          <div className="user__info">
            <p className="user__info__name">user</p>
            <p className="user__info__email">user@user.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
