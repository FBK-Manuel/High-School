import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../../landingPageComponents/Index";

const Events: React.FC = () => {
  return (
    <div className=" ">
      <div className="pt-24 bg-[#F2F2F2]">
        <div className="text-center p-20 text-gray-900">
          <h2 className="text-4xl text-balance font-bold">Upcoming Events</h2>
          <div className="inline-flex mt-3">
            <Link className="text-gray-500 hover:text-gray-800 mr-3" to="/home">
              Home
            </Link>{" "}
            / <p className="text-gray-500 ml-3 hover:text-gray-800">Events</p>
          </div>
        </div>
      </div>
      <div className="w3-content">
        <Search />
      </div>
    </div>
  );
};

export default Events;
