import React from "react";

const Search: React.FC = () => {
  return (
    <div>
      <div className="w3-content pb-20 pt-20">
        <form
          action=""
          method="post"
          className="w-full flex flex-col sm:flex-row p-3 justify-between items-start sm:items-center">
          <input
            type="date"
            className="mr-2 w-full  sm:w-auto bg-[#F2F2F2] p-2 border rounded mb-2 sm:mb-0"
            placeholder="Event Date"
            value=""
            name="date"
            id="date"
            // onChange={handleChange}
          />
          <input
            type="text"
            className="mr-2 w-full sm:w-auto bg-[#F2F2F2] p-2 border rounded mb-2 sm:mb-0"
            placeholder="Event Location"
            value=""
            name="location"
            id="location"
            // onChange={handleChange}
          />
          <input
            type="search"
            className="mr-2 w-full sm:w-auto bg-[#F2F2F2] p-2 border rounded mb-2 sm:mb-0"
            placeholder="Search Events"
            value=""
            name="search"
            id="search"
            // onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-[#1054C8] blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded mt-2 sm:mt-0">
            FIND EVENT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
