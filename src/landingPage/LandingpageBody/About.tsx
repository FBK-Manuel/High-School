import { Header, Intro, Perks, SubHeader, Banner } from "../../landingPageComponents/aboutComponent";


const About:React.FC = () => {
  return (
    <section className="flex flex-col gap-12">
      <Header routeTitle="About Us" routeName="About" />
      <SubHeader />   
      <Intro />   
      <Perks />
      <Banner />
    </section>
  )
}

export default About;
