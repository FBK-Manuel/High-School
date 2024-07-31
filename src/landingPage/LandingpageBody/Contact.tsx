import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import { Header } from "../../landingPageComponents/aboutComponent";
import { Info, Form } from "../../landingPageComponents/contactComponent";

import { ScrollToTop } from "../../scrollToTop/ScrollToTop";

function Contact() {
  const location = useLocation();
  useEffect(() => {
    ScrollToTop();
  }, [location]);

  return (
    <section>
       <Header routeTitle="Contact Us" routeName="Contact" />
       <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-[94%] max-w-[45rem] lg:max-w-none mx-auto my-6 md:my-8 lg:my-24">
          <Info />
          <Form />
       </div>
    </section>
  );
}

export default Contact;
