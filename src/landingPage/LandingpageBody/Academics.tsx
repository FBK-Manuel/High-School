// import React from 'react'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollToTop } from "../../scrollToTop/ScrollToTop";
import { Header } from "../../landingPageComponents/aboutComponent";
import { Processes, SubHeader } from "../../landingPageComponents/academicsComponent";

function Academics() {
  const location = useLocation();
  useEffect(() => {
    ScrollToTop();
  }, [location]);

  return (
    <section>
      <Header routeTitle="Admissions" routeName="Academics" />
      <div className="bg-[#FDFDFD]">
        <SubHeader />
        <Processes />
      </div>
    </section>
  );
}

export default Academics;
