// import React from 'react'
import NavBar from "../landingPage/LandingPageHeader/NavBar";
import Home from "../landingPage/LandingpageBody/Home";
import Footer from "../landingPage/LandingPageFooter/Footer";
import ImageSliders from "../landingPage/LandingPageHeader/ImageSliders";

function LandingPage() {
  return (
    <div>
      <div>
        <header>
          <NavBar />
          <ImageSliders />
        </header>
        <main>
          <Home />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
