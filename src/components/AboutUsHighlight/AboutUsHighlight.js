import React from "react";
import "./AboutUsHighlight.css";

import HighlightCard from "../HighlightCard/HighlightCard";

const AboutUsHighlight = () => {
  return (
    <div className="aboutus-highlight">
      <div className="aboutus-highlight__container">
        <div className="aboutus-highlight__card">
          <HighlightCard
            highlightHeader="100+"
            highlightDescription="Clients"
          />
        </div>
        <div className="aboutus-highlight__card">
          <HighlightCard highlightHeader="99%" highlightDescription="Success" />
        </div>
        <div className="aboutus-highlight__card">
          <HighlightCard
            highlightHeader="1000+"
            highlightDescription="Projects"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHighlight;
