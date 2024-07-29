import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCourasel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          <div className="">
            <img src="/images/slide1.jpg" alt="image" />
          </div>
          <div>
            <img src="/images/slide2.png" alt="image" />
          </div>
          <div>
            <img src="/images/slide3.png" alt="image" />
          </div>
          <div>
            <img src="/images/slide4.png" alt="image" />
          </div>
          <div>
            <img src="/images/slide5.png" alt="image" />
          </div>
          <div>
            <img src="/images/slide6.png" alt="image" />
          </div>
        </Slider>
      </div>

      <div className="mt-20 mb-16 text-center">
        <h3 className="font-semibold text-4xl text-black">
          We Are On <span className="text-blue-600">Instagram</span>
        </h3>
        <p className="text-gray-400 pt-2">
          FOLLOW US ON{" "}
          <span className="text-black hover:text-gray-600">@HackHarik</span>
        </p>
      </div>
    </div>
  );
};

export default ImageCourasel;
