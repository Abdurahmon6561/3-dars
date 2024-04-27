import React from "react";
import "../Header/Header.css";
const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="logo">500px</h1>
      </div>
      <ul className="li">
        <p className="p_1">Discover</p>
        <p className="p_1">Licensing</p>
        <p className="p_1">Memberships</p>
        <p className="p_1">Quests</p>
        <p className="p_1">Blog</p>
        <p className="p_1">Award Winners</p>
      </ul>
      <div>
        <input type="text" placeholder="Search 500px" className="inp" />
        <button type="button" className="btn">
          Log in
        </button>
        <button type="button" className="btn_2">
          Sing up
        </button>
      </div>
    </div>
  );
};

export default Header;
