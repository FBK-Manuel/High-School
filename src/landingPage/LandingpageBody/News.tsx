// import React from "react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollToTop } from "../../scrollToTop/ScrollToTop";

function News() {
  const location = useLocation();
  useEffect(() => {
    ScrollToTop();
  }, [location]);

  return <div>News</div>;
}

export default News;
