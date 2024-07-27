import { Outlet } from "react-router-dom"; //component used to render children of routes

//custom components 
import NavBar from "../landingPage/LandingPageHeader/NavBar";
import Footer from "../landingPage/LandingPageFooter/Footer";


function LandingPage() {
  return (
    <div>
      <div>
        <header>
          <NavBar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
