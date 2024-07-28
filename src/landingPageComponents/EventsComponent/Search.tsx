import React from "react";

const Search: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <form action="" method="post">
          <input
            type="date"
            className="mr-4 p-2 border rounded"
            placeholder="Event Date"
            value=""
            name="date"
            id="date"
            // onChange={handleChange}
          />
          <input
            type="text"
            className="mr-2 p-2 border rounded"
            placeholder="Event Location"
            value=""
            name="location"
            id="location"
            // onChange={handleChange}
          />
          <input
            type="search"
            className="mr-2 p-2 border rounded"
            placeholder="Search Events"
            value=""
            name="search"
            id="search"
            // onChange={handleChange}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
