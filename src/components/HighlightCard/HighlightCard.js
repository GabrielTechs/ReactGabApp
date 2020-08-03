import React from "react";
import PropTypes from "prop-types";
import "./HighlightCard.css";

const HighlightCard = (props) => {
  let highlightCard = "highlight-card";
  if (props.highlightCard == "borderRight") {
    highlightCard = `${highlightCard} highlight-card__border--right`;
  } else if (props.highlightCard == "borderShadow") {
    highlightCard = `${highlightCard} highlight-card__border--right highlight-card__shadow`;
  }
  return (
    <div className={`${highlightCard}`}>
      <h1 className="highlight-card__title">{props.highlightHeader}</h1>
      <h3 className="highlight-card__description">
        {props.highlightDescription}
      </h3>
    </div>
  );
};

HighlightCard.propTypes = {
  highlightCard: PropTypes.string,
  highlightHeader: PropTypes.string,
  highlightDescription: PropTypes.string,
};

export default HighlightCard;
