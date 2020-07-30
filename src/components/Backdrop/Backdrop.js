import React from "react";
import PropTypes from "prop-types";
import "./Backdrop.css";

const Backdrop = (props) => (
  <button className="backdrop" onClick={props.click} />
);

Backdrop.propTypes = {
  click: PropTypes.func,
};

export default Backdrop;
