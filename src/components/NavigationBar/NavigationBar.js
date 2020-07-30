import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavigationBar.css";

class NavigationBar extends Component {
  render() {
    return (
      <header className="navigation-bar">
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
        </nav>
      </header>
    );
  }
}

export default NavigationBar;
