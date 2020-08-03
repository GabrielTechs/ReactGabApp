import React from "react";
import "./Services.css";

import HighlightCard from "../HighlightCard/HighlightCard";

const Services = () => {
  return (
    <div className="services">
      <div className="services__container">
        <div className="service">
          <HighlightCard
            highlightHeader="Web Dev"
            highlightDescription="Esse amet dolore aliquip pariatur laboris nulla qui est. Minim in laborum sint cupidatat ex. Ea labore in adipisicing sint anim. Laboris magna sit est ipsum eu anim voluptate commodo reprehenderit et consequat nulla ut non. Cillum ex magna sit elit nostrud adipisicing qui dolor aliqua culpa deserunt laboris. Consequat ex reprehenderit do proident nisi eu consequat esse reprehenderit est duis anim. Tempor voluptate sunt mollit eiusmod cupidatat."
          />
        </div>
        <div className="service">
          <HighlightCard
            highlightHeader="Business Dev"
            highlightDescription="Anim id sunt adipisicing duis. Esse in reprehenderit exercitation est esse do minim ut. Ad fugiat duis sunt dolore dolor nulla magna esse. Pariatur occaecat consectetur minim officia do tempor velit elit. Lorem amet duis minim ullamco quis incididunt cillum fugiat ad laboris. Dolore deserunt quis et veniam enim reprehenderit ut eiusmod nisi eu laborum minim non in. Nostrud ea ullamco commodo voluptate nulla ea veniam. Cillum ipsum laborum aliquip laboris eiusmod tempor nulla voluptate elit minim nisi elit nisi. Sunt dolor elit duis cillum enim nisi in deserunt."
          />
        </div>
        <div className="service--odd">
          <HighlightCard
            highlightHeader="Mobile Dev"
            highlightDescription="Et amet sunt labore sint elit. Ipsum nostrud nostrud Lorem occaecat sint. Enim qui ex aliquip ullamco. Voluptate consectetur sit commodo reprehenderit enim pariatur et. Nostrud veniam sit enim ad aliquip. Qui exercitation mollit ullamco proident consectetur. Eiusmod veniam reprehenderit enim proident ea. Irure et consequat mollit reprehenderit culpa reprehenderit veniam nisi laborum."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
