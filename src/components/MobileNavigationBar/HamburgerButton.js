import React from "react";
import PropTypes from "prop-types";
import "./HamburgerButton.css";

const HamburgerButton = (props) => (
  <button className="hamburger-button" onClick={props.click}>
    <div className="hamburger-button__line"></div>
    <div className="hamburger-button__line"></div>
    <div className="hamburger-button__line"></div>
  </button>
);
HamburgerButton.propTypes = {
  click: PropTypes.func,
};

export default HamburgerButton;
