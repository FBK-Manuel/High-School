import { Header, Intro, SubHeader } from "../../landingPageComponents/aboutComponent";


const About:React.FC = () => {
  return (
    <section className="flex flex-col gap-12">
      <Header routeTitle="About Us" routeName="About" />
      <SubHeader />   
      <Intro />   
    </section>
  )
}

export default About;
