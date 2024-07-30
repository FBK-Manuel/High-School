import React from "react";
import { Link } from "react-router-dom";

const SingleEventPage: React.FC = () => {
  return (
    <div>
      <div className="bg-[#F2F2F2]">
        <div className="text-center p-20 text-gray-900">
          <h2 className="text-4xl text-balance font-bold">
            Youth Sports Conference
          </h2>
          <div className="inline-flex mt-3">
            <Link className="text-gray-500 hover:text-gray-800 " to="/home">
              Home
            </Link>{" "}
            <span className="ml-2">/</span>{" "}
            <Link
              to="/events"
              className="text-gray-500 ml-3 hover:text-gray-800">
              Events
            </Link>
            <span className="ml-2">/</span>{" "}
            <p className="text-gray-500 ml-3">Single Event</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEventPage;
