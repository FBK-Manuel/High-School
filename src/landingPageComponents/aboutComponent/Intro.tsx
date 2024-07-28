import { slide4 } from "../../assets/images";

const Intro: React.FC = () => {
  return (
    <section className="flex flex-col items-center md:flex-row gap-4 md:gap-8 lg:gap-12 w-[94%] mx-auto my-6 md:my-8 lg:my-12">
      <div className="relative w-full h-full md:flex-1">
          <img src={slide4} className="w-[92%] h-full relative z-10 ml-auto transform -translate-y-8 object-cover rounded-md" alt="student graduands" />
          <div className="w-[92%] h-full bg-[#E9E9E9] absolute bottom-0 left-0 rounded-md"></div>
      </div>
      <div className="flex flex-col gap-4 items-start md:flex-1">
        <h2 className="text-[2rem] text-[#333333]">Welcome to <span className="text-blue-600">Udemy</span> a prestigious secondary school</h2>
        <p className="text-[#9b9b9b] text-base md:text-lg font-light leading-6">We understand that each of our students is a uniquely talented individual. Within our supportive community, students are facilitated to develop positive relationships and grab the opportunity to realize their individual potential to the full.</p>
        <button className="text-white bg-[#1054c8] text-base py-[0.5em] px-[1.5em] rounded-md">Learn More</button>
      </div>
    </section>
  )
}

export default Intro;