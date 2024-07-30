import { Outlet, useLocation } from "react-router-dom"; //component used to render children of routes

//custom components
import NavBar from "../landingPage/LandingPageHeader/NavBar";
import Footer from "../landingPage/LandingPageFooter/Footer";
import ScrollToTopButton from "../scrollToTop/ScrollToTopButton";
import useScrollPosition from "../scrollToTop/useScrollPosition";
import React, { useEffect } from "react";
import { ScrollToTop } from "../scrollToTop/ScrollToTop";

function LandingPage() {
  const isScrolled = useScrollPosition();
  const [scrollToTop, setScrollToTop] = React.useState(false);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScrollToTop(scrollToTop); // Hide the button after clicking
  };
  const location = useLocation();
  useEffect(() => {
    ScrollToTop();
  }, [location]);
  return (
    <>
      <header className="sticky top-0 z-50 h-[16dvh]">
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>

      <div>{isScrolled && <ScrollToTopButton handleClick={handleClick} />}</div>
    </>
  );
}

export default LandingPage;
