import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavigationBar.css";
import MobileNavBar from "../MobileNavigationBar/MobileNavigationBar";
import HamburgerButton from "../MobileNavigationBar/HamburgerButton";

class NavigationBar extends Component {
  state = {
    mobileNavBarOpen: false,
  };

  hamburgerButtonClickHandler = () => {
    this.setState((prevState) => {
      return { mobileNavBarOpen: !prevState.mobileNavBarOpen };
    });
  };

  render() {
    return (
      <div className="navigation-bar">
        <nav className="navigation-bar__navigation">
          <div className="navigation-bar__logo">
            <a href="/">Logo</a>
          </div>
          <div className="navigation-bar__spacer"></div>
          <div className="navigation-bar__list">
            <ul>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon="home" size="1x" />
                </a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
            </ul>
          </div>
          <div>
            <HamburgerButton click={this.hamburgerButtonClickHandler} />
          </div>
          <MobileNavBar show={this.state.mobileNavBarOpen} />
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
