import React from "react";

const Newsletter: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };
  return (
    <div>
      <div className="bg-blue-700 text-white rounded">
        <div className="lg:p-10 sm:p-7">
          <div className="w3-row-padding p-10">
            <div className="w3-container w3-half">
              <h2 className="text-3xl text-center font-bold">SUBSCRIBE</h2>
              <h4 className="text-2xl text-center font-semibold">
                TO OUR NEWSLETTER
              </h4>
              <p className="text-center">
                Enter your email in the input form to receive the latest news
                and information about our activities and events.
              </p>
            </div>
            <div className="w3-half mt-5">
              <div className="">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white text-black p-6 rounded-md shadow-md hover:shadow-2xl transition duration-500 ease-in-out">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border-2 border-gray-300 p-2 pr-8 rounded-md hover:shadow-lg outline-none w-full mb-4"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
