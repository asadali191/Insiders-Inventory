import React, { useRef } from "react";
import Slider from "react-slick";
import Card from "../card/Card";
import image from '../../images/img1.png';
import image2 from '../../images/img2.png';
import image3 from '../../images/img3.png';

// Import Material-UI icons
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function SimpleSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="slider-container">
        <div>
          {/* Previous Button */}
          <KeyboardBackspaceIcon
            onClick={() => sliderRef.current.slickPrev()}
            style={{ cursor: "pointer", fontSize: "2rem" }}
          />

          {/* Next Button */}
          <ArrowRightAltIcon
            onClick={() => sliderRef.current.slickNext()}
            style={{ cursor: "pointer", fontSize: "2rem" }}
          />
        </div>
        
        <Slider ref={sliderRef} {...settings}>
          <div>
            <Card
              img={image}
              property={"Vacant"}
              value={"$45,120"}
              percentage={"37%"}
            />
          </div>
          <div>
            <Card
              img={image2}
              property={"Owner Occupied"}
              value={"$45,120"}
              percentage={"37%"}
            />
          </div>
          <div>
            <Card
              img={image3}
              property={"Tenant-Occupied"}
              value={"$45,120"}
              percentage={"37%"}
            />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
}
