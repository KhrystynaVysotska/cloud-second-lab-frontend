import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LatestMeasurementCard from "./LatestMeasurementCard";
import SliderStyled from "../../../styles/measurements/components/Slider.styled";

export default function LatestMeasurementCardCarousel({ measurements }) {
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    draggable: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };
  return (
    <SliderStyled>
      <Slider {...settings}>
        {measurements.map((measurement, index) => {
          return (
            <React.Fragment key={index}>
              <LatestMeasurementCard measurement={measurement} />
            </React.Fragment>
          );
        })}
      </Slider>
    </SliderStyled>
  );
}
