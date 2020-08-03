import React from "react";
import "./Services.css";

import HighlightCard from "../HighlightCard/HighlightCard";

const Services = () => {
  return (
    <div className="services">
      <div className="services__container">
        <div className="service">
          <HighlightCard
            highlightCard="borderShadow"
            highlightHeader="WebDev"
            highlightDescription="Esse amet dolore aliquip pariatur laboris nulla qui est. Minim in laborum sint cupidatat ex. Ea labore in adipisicing sint anim. Laboris magna sit est ipsum eu anim voluptate commodo reprehenderit et consequat nulla ut non. Cillum ex magna sit elit nostrud adipisicing qui dolor aliqua culpa deserunt laboris. Consequat ex reprehenderit do proident nisi eu consequat esse reprehenderit est duis anim. Tempor voluptate sunt mollit eiusmod cupidatat."
          />
        </div>
        <div className="service">
          <HighlightCard
            highlightCard="borderShadow"
            highlightHeader="BusinessDev"
            highlightDescription="Dolor cupidatat exercitation nulla labore id minim laborum. Ipsum eu quis tempor ad amet deserunt culpa cillum est ad esse excepteur pariatur ex. Eiusmod aliquip minim deserunt sit."
          />
        </div>
        <div className="service--odd">
          <HighlightCard
            highlightCard="borderShadow"
            highlightHeader="MobileDev"
            highlightDescription="Et amet sunt labore sint elit. Ipsum nostrud nostrud Lorem occaecat sint. Enim qui ex aliquip ullamco."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
