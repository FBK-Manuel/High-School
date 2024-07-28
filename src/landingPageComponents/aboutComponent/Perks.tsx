// component
import Perk from "./Perk";

// type
import { perks } from "../../DataTypes/DataTypes";

// icons
import { FaCarrot, FaBus, FaMusic, FaFootball, FaFlag } from "react-icons/fa6";
import { BiSolidCameraMovie } from "react-icons/bi";

const Perks: React.FC = () => {
    const perks: perks[] = [
        {
            icon: <FaCarrot className="size-5 text-[#1054c8]" />,
            heading: "Nutritious food",
            summary: "We have the most scientific and suitable nutrition modes for our students."
        },
        {
            icon: <FaBus className="size-5 text-[#1054c8]" />,
            heading: "Bus services",
            summary: "Bus fares are completely free for both Ademy's students and teachers."
        },
        {
            icon: <FaMusic className="size-5 text-[#1054c8]" />,
            heading: "Music lessons",
            summary: "Students are encouraged to take music lessons for developing artistic talents."
        },
        {
            icon: <FaFootball className="size-5 text-[#1054c8]" />,
            heading: "Team sports",
            summary: "Team sports are for teenagers of all ages to enhance team spirit."
        },
        {
            icon: <BiSolidCameraMovie className="size-5 text-[#1054c8]" />,
            heading: "Drama clubs",
            summary: "Drama clubs are the most reputable and highly regarded groups in our school."
        },
        {
            icon: <FaFlag className="size-5 text-[#1054c8]" />,
            heading: "Summer camps",
            summary: "We organized camps for students from all over the country every summer."
        },
    ] 
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[94%] mx-auto my-6 md:my-8 lg:my-12">
        {perks.map(({icon, heading, summary}, index) => (
            <Perk key={index} icon={icon} heading={heading} summary={summary} />
        ))}
    </section>
  )
}

export default Perks;