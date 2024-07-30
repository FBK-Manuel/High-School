import { useLocation } from "react-router-dom";
import {
  Header,
  Intro,
  Perks,
  SubHeader,
  Banner,
  MeetTeachers,
  Brands,
} from "../../landingPageComponents/aboutComponent";
import { useEffect } from "react";
import { ScrollToTop } from "../../scrollToTop/ScrollToTop";

const About: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    ScrollToTop();
  }, [location]);
  return (
    <section className="flex flex-col gap-12">
      <Header routeTitle="About Us" routeName="About" />
      <SubHeader />
      <Intro />
      <Perks />
      <Banner />
      <MeetTeachers />
      <Brands />
    </section>
  );
};

export default About;
