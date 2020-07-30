import React, { Component } from "react";
import PropTypes from "prop-types";

import "./MobileNavigationBar.css";

class MobileNavBar extends Component {
  render() {
    let mobileNavBarClasses = "mobile-navbar";
    if (this.props.show) {
      mobileNavBarClasses = "mobile-navbar mobile-navbar--open";
    }
    return (
      <div>
        <nav className={mobileNavBarClasses}>
          <ul>
            <li>
              <a href="/">Home</a>
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
        </nav>
      </div>
    );
  }
}
MobileNavBar.propTypes = {
  show: PropTypes.bool,
};

export default MobileNavBar;
