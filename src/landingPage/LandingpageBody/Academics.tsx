// import React from 'react'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollToTop } from "../../scrollToTop/ScrollToTop";

function Academics() {
  const location = useLocation();
  useEffect(() => {
    ScrollToTop();
  }, [location]);

  return <div>Academics</div>;
}

export default Academics;
