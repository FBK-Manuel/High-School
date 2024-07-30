import React from "react";
import { ScrollToTopButtonType } from "../DataTypes/DataTypes";
import { ImArrowUp } from "react-icons/im";

const ScrollToTopButton: React.FC<ScrollToTopButtonType> = ({
  handleClick,
}) => {
  return (
    <div>
      <div>
        <button
          className="fixed bottom-20 right-4 bg-blue-500 text-white rounded-full px-4 py-2"
          onClick={handleClick}>
          <ImArrowUp />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
