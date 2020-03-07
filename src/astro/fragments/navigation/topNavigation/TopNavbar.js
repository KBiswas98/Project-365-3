import React, { Component } from "react";
import "./topNavbar.scss";
import { Link } from "react-router-dom";
import { FiUser, FiSearch } from "react-icons/fi";

export default class TopNavbar extends Component {
  render() {
    return (
      <div className="top-navbar">
        <div className="options">
          <div>
            <Link to="/horoscope">Horoscope</Link>
            <Link to="/astrologers">Astrologers</Link>
            <Link to="/astro-plus">Astro plus</Link>
          </div>
          <div>
            <Link to="/search">
              <FiSearch />
            </Link>
            <Link to="/user">
              <FiUser />
            </Link>
          </div>
        </div>
        <div className="logo">
          <Link to="/">
            <img
              src={require("../../../assets/icons/astro.png")}
              style={{ width: 160, height: 50 }}
            />
          </Link>
        </div>
      </div>
    );
  }
}
