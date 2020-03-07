import React, { Component } from "react";
import "./leftNavbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import {
  GiAries,
  GiTaurus,
  GiGemini,
  GiCancer,
  GiLeo,
  GiVirgo
} from "react-icons/gi";
import { Button } from "../../../components/button/Button";
import { Link } from "react-router-dom";

export default class LeftNavbar extends Component {
  _menuClickHandaler = () => {
    console.log("click on menu.");
  };
  render() {
    const listOfItem = [
      <GiAries />,
      <GiTaurus />,
      <GiGemini />,
      <GiCancer />,
      <GiLeo />,
      <GiVirgo />
    ];

    const linkTo = [
      "/navigate/lagne",
      "/navigate/lagne",
      "/navigate/lagne",
      "/navigate/lagne",
      "/navigate/lagne",
      "/navigate/lagne"
    ];

    return (
      <div className="left-navbar">
        <Button
          type="icon"
          callback={this._menuClickHandaler}
          style={{ margin: "40px 0px", fontSize: 20 }}
        >
          {/* <AiOutlineMenu /> */}
          <img
            src={require("../../../assets/icons/menu.png")}
            style={{ height: 15, width: 25 }}
          />
        </Button>
        <Link to="/navigate/lagna" style={{margin: '40px 0px 50px 0px', marginTop: '20vh'}}>
          <img style={{ height: 30, width: 30 }} src={require("../../../assets/icons/lagnachart_white.png")} />
        </Link>
        <div className="zodiac">
          {listOfItem.map((item, index) => (
            <Link to={linkTo[index]} key={index}>
              {item}
            </Link>
          ))}

          <Button type="icon">
            <MdExpandMore />
          </Button>
        </div>
      </div>
    );
  }
}
