// import React from 'react'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollToTop } from "../../scrollToTop/ScrollToTop";

function Contact() {
  const location = useLocation();
  useEffect(() => {
    ScrollToTop();
  }, [location]);

  return <div>Contact</div>;
}

export default Contact;
