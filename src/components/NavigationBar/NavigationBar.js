import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavigationBar.css";
import MobileNavBar from "../MobileNavigationBar/MobileNavigationBar";
import HamburgerButton from "../MobileNavigationBar/HamburgerButton";
import Backdrop from "../Backdrop/Backdrop";

class NavigationBar extends Component {
  state = {
    mobileNavBarOpen: false,
  };

  hamburgerButtonClickHandler = () => {
    this.setState((prevState) => {
      return { mobileNavBarOpen: !prevState.mobileNavBarOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ mobileNavBarOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.mobileNavBarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

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
          {backdrop}
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
