import { useLocation } from "react-router-dom";
import {
  ImageSliders,
  ImageCourasel,
  LatestNews,
  Newsletter,
  ParentTestimonies,
  UpcomingEvent,
  WelcomeComponent,
  WhyChooseUs,
} from "../../landingPageComponents/homeComponent/Index";
import { useEffect } from "react";
import { ScrollToTop } from "../../scrollToTop/ScrollToTop";

function Home() {
  const location = useLocation();
  useEffect(() => {
    ScrollToTop();
  }, [location]);
  return (
    <div>
      <ImageSliders />
      <div className="pt-11">
        <p className="text-gray-400 text-center mb-3">WE ARE THE BEST SCHOOL</p>
        <h1 className="text-center text-4xl font-bold">
          Welcome To <span className="text-blue-600">Udemy</span> School
        </h1>
      </div>
      <WelcomeComponent />
      <WhyChooseUs />
      <Newsletter />
      <LatestNews />
      <UpcomingEvent />
      <ParentTestimonies />
      <ImageCourasel />
    </div>
  );
}

export default Home;
