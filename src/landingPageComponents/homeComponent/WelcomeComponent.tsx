import React from "react";
// import { Link } from "react-router-dom";

const WelcomeComponent: React.FC = () => {
  return (
    <div>
      <div className="w3-row-padding w3-padding-32 lg:p-10 sm:p-7">
        <div className="w3-half mt-3">
          <img
            src="/public/images/slide4.png"
            alt="image"
            className="w-full h-auto"
          />
        </div>
        <div className="w3-half w3-margin-top ">
          <h1 className="text-3xl font-semibold mt-4">
            Welcome to{" "}
            <span className="text-blue-600 hover:text-black">Ademy</span> a
            prestigious secondary school
          </h1>
          <p className="text-gray-500 text-sm mt-4">
            We understand that each of our students is a uniquely talented
            individual. Within our supportive community, students are
            facilitated to develop positive relationships and grab the
            opportunity to realize their individual potential to the full.
          </p>
          <div className="">
            <button className="bg-blue-500 text-white hover:bg-blue-800 rounded-md shadow-md p-3 mt-10">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
