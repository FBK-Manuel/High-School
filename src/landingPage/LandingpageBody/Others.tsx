// import React from 'react'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollToTop } from "../../scrollToTop/ScrollToTop";

function Others() {
  const location = useLocation();
  useEffect(() => {
    ScrollToTop();
  }, [location]);
  return <div>Others</div>;
}

export default Others;
