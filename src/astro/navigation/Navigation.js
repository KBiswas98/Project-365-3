import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavbar from "../fragments/navigation/topNavigation/TopNavbar";
import LeftNavbar from "../fragments/navigation/leftNavigation/LeftNavbar";
import Home from "../screens/home/Home";
import "./navigation.scss";

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <div className="main_screen">
          <LeftNavbar />
          <div className="screen">
            <TopNavbar />
            <div className="change">
              <Switch>
                <Route path="/" component={Home}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
