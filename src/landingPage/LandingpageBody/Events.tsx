import React from "react";
import { Link } from "react-router-dom";
import {
  AllEvents,
  QuickRegistration,
  Search,
} from "../../landingPageComponents/EventsComponent/Index";

const Events: React.FC = () => {
  return (
    <div className=" ">
      <div className="bg-[#F2F2F2]">
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
      <div className="">
        <Search />
        <div className="bg-[#F2F2F2] p-20">
          <AllEvents />
        </div>
        <div className="bg-[#1054c8]">
          <QuickRegistration />
        </div>
      </div>
    </div>
  );
};

export default Events;
