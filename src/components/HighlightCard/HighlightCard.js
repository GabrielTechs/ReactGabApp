import React from "react";
import PropTypes from "prop-types";
import "./HighlightCard.css";

const HighlightCard = (props) => {
  return (
    <div className="highlight-card">
      <h1 className="highlight-card__title">{props.highlightHeader}</h1>
      <h3 className="highlight-card__description">
        {props.highlightDescription}
      </h3>
    </div>
  );
};

HighlightCard.propTypes = {
  highlightHeader: PropTypes.string,
  highlightDescription: PropTypes.string,
};

export default HighlightCard;
