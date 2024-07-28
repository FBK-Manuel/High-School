import { Outlet } from "react-router-dom"; //component used to render children of routes

//custom components 
import NavBar from "../landingPage/LandingPageHeader/NavBar";
import Footer from "../landingPage/LandingPageFooter/Footer";


function LandingPage() {
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
    </>
  );
}

export default LandingPage;
