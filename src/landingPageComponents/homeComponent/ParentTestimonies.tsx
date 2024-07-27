import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderType } from "../../DataTypes/DataTypes";
import { FaFaceGrinStars } from "react-icons/fa6";

const ParentTestimonies: React.FC = () => {
  const settingslg: sliderType = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const settingssm: sliderType = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <div>
      <div className="text-center p-11">
        <h5 className="text-gray-400 font-medium ">SATISFIED PARENTS</h5>
        <h2 className="text-4xl font-bold">
          Parents{" "}
          <span className="text-blue-600 hover:text-gray-500">Testimonies</span>
        </h2>
      </div>
      <div className="slider-container">
        {/* on large screen view */}
        <Slider {...settingslg} className="w3-hide-small w3-hide-medium">
          <div className="w3-container p-11">
            <div className="w3-card border bg-transparent border-gray-300 text-gray-500 p-10 rounded hover:shadow-2xl transition duration-700 ease-in-out">
              <div className="flex justify-center items-center pt-3">
                <img
                  src="/images/girl_mountain.jpg"
                  alt="image"
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  temporibus, quos perferendis deserunt ipsa assumenda omnis?
                </p>
                {/* star ratings */}
                <div className="text-center pt-4 flex justify-center items-center">
                  <FaFaceGrinStars className="text-yellow-500" size={30} />
                </div>
                <h4 className="p-2 text-lg font-sans font-bold text-black">
                  Mr John{" "}
                  <span className="text-gray-400 font-light text-sm">/CEO</span>
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-container p-11">
              <div className="w3-card border bg-transparent border-gray-300 text-gray-500 p-10 rounded hover:shadow-2xl transition duration-700 ease-in-out">
                <div className="flex justify-center items-center pt-3">
                  <img
                    src="/images/people1.jpg"
                    alt="image"
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet temporibus, quos perferendis deserunt ipsa assumenda
                    omnis?
                  </p>
                  {/* star ratings */}
                  <div className="text-center pt-4 flex justify-center items-center">
                    <FaFaceGrinStars className="text-yellow-500" size={30} />
                  </div>
                  <h4 className="p-2 text-lg font-sans font-bold text-black">
                    Mr John{" "}
                    <span className="text-gray-400 font-light text-sm">
                      /CEO
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-container p-11">
              <div className="w3-card border bg-transparent border-gray-300 text-gray-500 p-10 rounded hover:shadow-2xl transition duration-700 ease-in-out">
                <div className="flex justify-center items-center pt-3">
                  <img
                    src="/images/img_avtar.jpg"
                    alt="image"
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet temporibus, quos perferendis deserunt ipsa assumenda
                    omnis?
                  </p>
                  {/* star ratings */}
                  <div className="text-center pt-4 flex justify-center items-center">
                    <FaFaceGrinStars className="text-yellow-500" size={30} />
                  </div>
                  <h4 className="p-2 text-lg font-sans font-bold text-black">
                    Mr John{" "}
                    <span className="text-gray-400 font-light text-sm">
                      /CEO
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-container p-11">
              <div className="w3-card border bg-transparent border-gray-300 text-gray-500 p-10 rounded hover:shadow-2xl transition duration-700 ease-in-out">
                <div className="flex justify-center items-center pt-3">
                  <img
                    src="/images/team1.jpg"
                    alt="image"
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet temporibus, quos perferendis deserunt ipsa assumenda
                    omnis?
                  </p>
                  {/* star ratings */}
                  <div className="text-center pt-4 flex justify-center items-center">
                    <FaFaceGrinStars className="text-yellow-500" size={30} />
                  </div>
                  <h4 className="p-2 text-lg font-sans font-bold text-black">
                    Mr John{" "}
                    <span className="text-gray-400 font-light text-sm">
                      /CEO
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-container p-11">
              <div className="w3-card border bg-transparent border-gray-300 text-gray-500 p-10 rounded hover:shadow-2xl transition duration-700 ease-in-out">
                <div className="flex justify-center items-center pt-3">
                  <img
                    src="/images/team2.jpg"
                    alt="image"
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet temporibus, quos perferendis deserunt ipsa assumenda
                    omnis?
                  </p>
                  {/* star ratings */}
                  <div className="text-center pt-4 flex justify-center items-center">
                    <FaFaceGrinStars className="text-yellow-500" size={30} />
                  </div>
                  <h4 className="p-2 text-lg font-sans font-bold text-black">
                    Mr John{" "}
                    <span className="text-gray-400 font-light text-sm">
                      /CEO
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-container p-11 mb-20">
              <div className="w3-card border bg-transparent border-gray-300 text-gray-500 p-10 rounded hover:shadow-2xl transition duration-700 ease-in-out">
                <div className="flex justify-center items-center pt-3">
                  <img
                    src="/images/team4.jpg"
                    alt="image"
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet temporibus, quos perferendis deserunt ipsa assumenda
                    omnis?
                  </p>
                  {/* star ratings */}
                  <div className="text-center pt-4 flex justify-center items-center">
                    <FaFaceGrinStars className="text-yellow-500" size={30} />
                  </div>
                  <h4 className="p-2 text-lg font-sans font-bold text-black">
                    Mr John{" "}
                    <span className="text-gray-400 font-light text-sm">
                      /CEO
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        {/* on smaller screen view port */}
        <Slider {...settingssm} className="w3-hide-large">
          <div className="w3-container p-11">
            <div className="w3-card border bg-transparent border-gray-300 text-gray-500 p-10 rounded hover:shadow-2xl transition duration-700 ease-in-out">
              <div className="flex justify-center items-center pt-3">
                <img
                  src="/images/girl_mountain.jpg"
                  alt="image"
                  className="w-24 h-24 rounded-full"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-semibold text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  temporibus, quos perferendis deserunt ipsa assumenda omnis?
                </p>
                {/* star ratings */}
                <div className="text-center pt-4 flex justify-center items-center">
                  <FaFaceGrinStars className="text-yellow-500" size={30} />
                </div>
                <h4 className="p-2 text-lg font-sans font-bold text-black">
                  Mr John{" "}
                  <span className="text-gray-400 font-light text-sm">/CEO</span>
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-container p-11">
              <div className="w3-card border bg-transparent border-gray-300 text-gray-500 p-10 rounded hover:shadow-2xl transition duration-700 ease-in-out">
                <div className="flex justify-center items-center pt-3">
                  <img
                    src="/images/people1.jpg"
                    alt="image"
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet temporibus, quos perferendis deserunt ipsa assumenda
                    omnis?
                  </p>
                  {/* star ratings */}
                  <div className="text-center pt-4 flex justify-center items-center">
                    <FaFaceGrinStars className="text-yellow-500" size={30} />
                  </div>
                  <h4 className="p-2 text-lg font-sans font-bold text-black">
                    Mr John{" "}
                    <span className="text-gray-400 font-light text-sm">
                      /CEO
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-container p-11">
              <div className="w3-card border bg-transparent border-gray-300 text-gray-500 p-10 rounded hover:shadow-2xl transition duration-700 ease-in-out">
                <div className="flex justify-center items-center pt-3">
                  <img
                    src="/images/img_avtar.jpg"
                    alt="image"
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet temporibus, quos perferendis deserunt ipsa assumenda
                    omnis?
                  </p>
                  {/* star ratings */}
                  <div className="text-center pt-4 flex justify-center items-center">
                    <FaFaceGrinStars className="text-yellow-500" size={30} />
                  </div>
                  <h4 className="p-2 text-lg font-sans font-bold text-black">
                    Mr John{" "}
                    <span className="text-gray-400 font-light text-sm">
                      /CEO
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-container p-11">
              <div className="w3-card border bg-transparent border-gray-300 text-gray-500 p-10 rounded hover:shadow-2xl transition duration-700 ease-in-out">
                <div className="flex justify-center items-center pt-3">
                  <img
                    src="/images/team1.jpg"
                    alt="image"
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet temporibus, quos perferendis deserunt ipsa assumenda
                    omnis?
                  </p>
                  {/* star ratings */}
                  <div className="text-center pt-4 flex justify-center items-center">
                    <FaFaceGrinStars className="text-yellow-500" size={30} />
                  </div>
                  <h4 className="p-2 text-lg font-sans font-bold text-black">
                    Mr John{" "}
                    <span className="text-gray-400 font-light text-sm">
                      /CEO
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-container p-11">
              <div className="w3-card border bg-transparent border-gray-300 text-gray-500 p-10 rounded hover:shadow-2xl transition duration-700 ease-in-out">
                <div className="flex justify-center items-center pt-3">
                  <img
                    src="/images/team2.jpg"
                    alt="image"
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet temporibus, quos perferendis deserunt ipsa assumenda
                    omnis?
                  </p>
                  {/* star ratings */}
                  <div className="text-center pt-4 flex justify-center items-center">
                    <FaFaceGrinStars className="text-yellow-500" size={30} />
                  </div>
                  <h4 className="p-2 text-lg font-sans font-bold text-black">
                    Mr John{" "}
                    <span className="text-gray-400 font-light text-sm">
                      /CEO
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w3-container p-11 mb-20">
              <div className="w3-card border bg-transparent border-gray-300 text-gray-500 p-10 rounded hover:shadow-2xl transition duration-700 ease-in-out">
                <div className="flex justify-center items-center pt-3">
                  <img
                    src="/images/team4.jpg"
                    alt="image"
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet temporibus, quos perferendis deserunt ipsa assumenda
                    omnis?
                  </p>
                  {/* star ratings */}
                  <div className="text-center pt-4 flex justify-center items-center">
                    <FaFaceGrinStars className="text-yellow-500" size={30} />
                  </div>
                  <h4 className="p-2 text-lg font-sans font-bold text-black">
                    Mr John{" "}
                    <span className="text-gray-400 font-light text-sm">
                      /CEO
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ParentTestimonies;
