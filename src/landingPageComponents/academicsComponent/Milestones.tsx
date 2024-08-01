import { milestone } from "../../DataTypes/DataTypes";
import Milestone from "./Milestone";

// icons
import { FaGraduationCap, FaChildReaching, FaFaceGrinBeam, FaPersonCircleCheck } from "react-icons/fa6";



const Milestones = () => {
    const milestonesData: milestone[] = [
        {
            icon: <FaGraduationCap className="size-8 lg:size-10 text-[#B8CCEF]"  />,
            totalCount: 90,
            totalCountUnit: "%",
            title: "Passing to universities"
        },
        {
            icon: <FaChildReaching className="size-8 lg:size-10 text-[#B8CCEF]"  />,
            totalCount: 49,
            totalCountUnit: "K",
            title: "Students Enrolled"
        },
        {
            icon: <FaFaceGrinBeam className="size-8 lg:size-10 text-[#B8CCEF]"  />,
            totalCount: 2458,
            title: "High satisfaction"
        },
        {
            icon: <FaPersonCircleCheck className="size-8 lg:size-10 text-[#B8CCEF]"  />,
            totalCount: 1090,
            title: "CertIfied teachers"
        },
    ]; 
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-0 py-24 px-4 bg-[#1054C8] mt-6 md:mt-8 lg:mt-24">
        {milestonesData.map(({icon, totalCount, totalCountUnit, title}, index)=> (
            <Milestone key={index} icon={icon} totalCount={totalCount} totalCountUnit={totalCountUnit} title={title} />
        ))}
    </section>
  )
}

export default Milestones;