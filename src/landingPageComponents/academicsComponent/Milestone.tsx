

import { milestone } from "../../DataTypes/DataTypes";

const Milestone: React.FC<milestone> = ({icon, totalCount, totalCountUnit, title}) => {
    
  return (
    <div className="flex flex-col items-center gap-2">
        <div>
            {icon}
        </div>
        <h4 className="text-white text-2xl lg:text-3xl font-normal mt-4">{totalCount}{totalCountUnit && totalCountUnit}</h4>
        <p className="text-[#B8CCEF] text-base md:text-lg tracking-widest md:tracking-[0.1875em] uppercase">{title}</p>
    </div>
  )
}

export default Milestone