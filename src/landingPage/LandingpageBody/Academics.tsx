

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollToTop } from "../../scrollToTop/ScrollToTop";
import { Header } from "../../landingPageComponents/aboutComponent";
import { Milestones, Processes, SubHeader } from "../../landingPageComponents/academicsComponent";

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
        <Milestones />
      </div>
    </section>
  );
}

export default Academics;
