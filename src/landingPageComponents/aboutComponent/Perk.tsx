import { perks } from "../../DataTypes/DataTypes";


const Perk: React.FC<perks> = ({icon, heading, summary}) => {
  return (
    <div className="flex items-start gap-4">
        <div className="bg-[#F2F2F2] w-fit p-6 rounded-full">
            {icon}
        </div>
        <div className="flex flex-col gap-2">
            <h3 className="text-base text-[#333333] font-medium uppercase tracking-wide">{heading}</h3>
            <p className="text-base text-[#9b9b9b] font-light">{summary}</p>
        </div>
    </div>
  )
}

export default Perk;