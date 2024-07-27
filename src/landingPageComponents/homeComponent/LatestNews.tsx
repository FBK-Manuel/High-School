import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestNews: React.FC = () => {
  const settingslg = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const settingssm = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:p-10 sm:p-7">
      <div className="mt-20 mb-20">
        <h2 className="text-center text-black font-bold text-4xl">
          Our Latest <span className="text-blue-600">News</span>
        </h2>
      </div>
      <div>
        <Slider {...settingslg} className="w3-hide-small w3-hide-medium">
          <div>
            <div className="w3-card-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-300 ">
              <img
                src="images/slide1.jpg"
                alt="image"
                className="w-full h-full hover:animate-bounce "
              />
              <div className="w3-container">
                <h4 className="text-lg text-center font-semibold mt-3 text-black">
                  Our Class As A Family
                </h4>
                <p className="text-gray-600 mt-3 text-center">
                  When a children join a new class sometimes they are nervours
                  and unsure about what to expect. Family want to know if they
                  will.
                </p>
                <hr className="border border-gray-700 p-2" />
                <div className="flex items-center justify-center p-7">
                  <button className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-card-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-300 ">
              <img
                src="images/slide4.png"
                alt="image"
                className="w-full h-full hover:animate-bounce"
              />
              <div className="w3-container">
                <h4 className="text-lg text-center font-semibold mt-3 text-black">
                  The 15th Athletic 0lympic
                </h4>
                <p className="text-gray-600 mt-3 text-center">
                  When a children join a new class sometimes they are nervours
                  and unsure about what to expect. Family want to know if they
                  will.
                </p>
                <hr className="border border-gray-700 p-2" />
                <div className="flex items-center justify-center p-7">
                  <button className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-card-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-300 ">
              <img
                src="images/slide3.png"
                alt="image"
                className="w-full h-full hover:animate-bounce"
              />
              <div className="w3-container">
                <h4 className="text-lg text-center font-semibold mt-3 text-black">
                  3 Most Challenging Course
                </h4>
                <p className="text-gray-600 mt-3 text-center">
                  When a children join a new class sometimes they are nervours
                  and unsure about what to expect. Family want to know if they
                  will.
                </p>
                <hr className="border border-gray-700 p-2" />
                <div className="flex items-center justify-center p-7">
                  <button className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* second part of the slide in 3  */}

          <div>
            <div className="w3-card-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-300 ">
              <img
                src="images/slide6.png"
                alt="image"
                className="w-full h-full hover:animate-bounce"
              />
              <div className="w3-container">
                <h4 className="text-lg text-center font-semibold mt-3 text-black">
                  Study Skill Enhencement
                </h4>
                <p className="text-gray-600 mt-3 text-center">
                  When a children join a new class sometimes they are nervours
                  and unsure about what to expect. Family want to know if they
                  will.
                </p>
                <hr className="border border-gray-700 p-2" />
                <div className="flex items-center justify-center p-7">
                  <button className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-card-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-300 ">
              <img
                src="images/slide5.png"
                alt="image"
                className="w-full h-full hover:animate-bounce"
              />
              <div className="w3-container">
                <h4 className="text-lg text-center font-semibold mt-3 text-black">
                  Learning Style Intro
                </h4>
                <p className="text-gray-600 mt-3 text-center">
                  When a children join a new class sometimes they are nervours
                  and unsure about what to expect. Family want to know if they
                  will.
                </p>
                <hr className="border border-gray-700 p-2" />
                <div className="flex items-center justify-center p-7">
                  <button className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-card-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-300 ">
              <img
                src="images/slide2.png"
                alt="image"
                className="w-full h-full hover:animate-bounce"
              />
              <div className="w3-container">
                <h4 className="text-lg text-center font-semibold mt-3 text-black">
                  Overcoming Obstacles
                </h4>
                <p className="text-gray-600 mt-3 text-center">
                  When a children join a new class sometimes they are nervours
                  and unsure about what to expect. Family want to know if they
                  will.
                </p>
                <hr className="border border-gray-700 p-2" />
                <div className="flex items-center justify-center p-7">
                  <button className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* on small screen */}
      <div>
        <Slider {...settingssm} className="w3-hide-large">
          <div>
            <div className="w3-card-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-300 ">
              <img
                src="/images/slide1.jpg"
                alt="image"
                className="w-full h-full hover:animate-bounce "
              />
              <div className="w3-container">
                <h4 className="text-lg text-center font-semibold mt-3 text-black">
                  Our Class As A Family
                </h4>
                <p className="text-gray-600 mt-3 text-center">
                  When a children join a new class sometimes they are nervours
                  and unsure about what to expect. Family want to know if they
                  will.
                </p>
                <hr className="border border-gray-700 p-2" />
                <div className="flex items-center justify-center p-7">
                  <button className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-card-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-300 ">
              <img
                src="/images/slide4.png"
                alt="image"
                className="w-full h-full hover:animate-bounce"
              />
              <div className="w3-container">
                <h4 className="text-lg text-center font-semibold mt-3 text-black">
                  The 15th Athletic 0lympic
                </h4>
                <p className="text-gray-600 mt-3 text-center">
                  When a children join a new class sometimes they are nervours
                  and unsure about what to expect. Family want to know if they
                  will.
                </p>
                <hr className="border border-gray-700 p-2" />
                <div className="flex items-center justify-center p-7">
                  <button className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-card-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-300 ">
              <img
                src="/images/slide3.png"
                alt="image"
                className="w-full h-full hover:animate-bounce"
              />
              <div className="w3-container">
                <h4 className="text-lg text-center font-semibold mt-3 text-black">
                  3 Most Challenging Course
                </h4>
                <p className="text-gray-600 mt-3 text-center">
                  When a children join a new class sometimes they are nervours
                  and unsure about what to expect. Family want to know if they
                  will.
                </p>
                <hr className="border border-gray-700 p-2" />
                <div className="flex items-center justify-center p-7">
                  <button className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* second part of the slide in 3  */}

          <div>
            <div className="w3-card-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-300 ">
              <img
                src="/images/slide6.png"
                alt="image"
                className="w-full h-full hover:animate-bounce"
              />
              <div className="w3-container">
                <h4 className="text-lg text-center font-semibold mt-3 text-black">
                  Study Skill Enhencement
                </h4>
                <p className="text-gray-600 mt-3 text-center">
                  When a children join a new class sometimes they are nervours
                  and unsure about what to expect. Family want to know if they
                  will.
                </p>
                <hr className="border border-gray-700 p-2" />
                <div className="flex items-center justify-center p-7">
                  <button className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-card-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-300 ">
              <img
                src="/images/slide5.png"
                alt="image"
                className="w-full h-full hover:animate-bounce"
              />
              <div className="w3-container">
                <h4 className="text-lg text-center font-semibold mt-3 text-black">
                  Learning Style Intro
                </h4>
                <p className="text-gray-600 mt-3 text-center">
                  When a children join a new class sometimes they are nervours
                  and unsure about what to expect. Family want to know if they
                  will.
                </p>
                <hr className="border border-gray-700 p-2" />
                <div className="flex items-center justify-center p-7">
                  <button className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-card-4 bg-white rounded-lg shadow-md hover:shadow-xl border border-gray-300 ">
              <img
                src="/images/slide2.png"
                alt="image"
                className="w-full h-full hover:animate-bounce"
              />
              <div className="w3-container">
                <h4 className="text-lg text-center font-semibold mt-3 text-black">
                  Overcoming Obstacles
                </h4>
                <p className="text-gray-600 mt-3 text-center">
                  When a children join a new class sometimes they are nervours
                  and unsure about what to expect. Family want to know if they
                  will.
                </p>
                <hr className="border border-gray-700 p-2" />
                <div className="flex items-center justify-center p-7">
                  <button className="bg-blue-600 px-2 py-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out text-white">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LatestNews;
