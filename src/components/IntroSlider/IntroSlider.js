import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./IntroSlider.css";

class IndroSlider extends Component {
  render() {
    const settings = {
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: true,
      infinite: true,
      pauseOnHover: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
    };
    return (
      <div className="Intro-slider">
        <h1>Hello</h1>
        <h3>Something else</h3>
        <Slider {...settings}>
          <Fragment>
            <img
              src="https://picsum.photos/1920/1080"
              alt=""
              className="Intro-slider__img"
            ></img>
          </Fragment>
          <Fragment>
            <img
              src="https://picsum.photos/1920/1081"
              alt=""
              className="Intro-slider__img"
            ></img>
          </Fragment>
          <Fragment>
            <img
              src="https://picsum.photos/1920/1082"
              alt=""
              className="Intro-slider__img"
            ></img>
          </Fragment>
          <Fragment>
            <img
              src="https://picsum.photos/1920/1083"
              alt=""
              className="Intro-slider__img"
            ></img>
          </Fragment>
          <Fragment>
            <img
              src="https://picsum.photos/1920/1084"
              alt=""
              className="Intro-slider__img"
            ></img>
          </Fragment>
        </Slider>
      </div>
    );
  }
}

export default IndroSlider;
