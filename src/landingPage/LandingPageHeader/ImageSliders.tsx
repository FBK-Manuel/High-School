import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ImageSliders: React.FC = () => {
  return (
    <div>
      <div className="relative w-screen h-screen">
        <img
          src="/images/slide2.png"
          alt="Background Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
          <h1 className="text-2xl font-bold text-white mb-2">
            Welcome To The Best School
          </h1>
          <p className="text-white font-bold mb-4">WELCOME TO UDEMY SCHOOL</p>
          <Link
            to="/signup"
            className=" inline-flex items-center justify-center bg-transparen border border-white text-white font-bold py-2 px-4 rounded hover:border-2 hover:border-white hover:bg-white hover:text-black transition duration-200 ease-in-out">
            GET STARTED
            <FaLongArrowAltRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageSliders;
