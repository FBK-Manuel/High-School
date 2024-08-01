import classNames from "classnames";

// type
import { admissionProcess } from "../../DataTypes/DataTypes";

const Process: React.FC<admissionProcess> = ({image, digit, title, description, flip}) => {
  return (
    <div className={classNames(flip && "lg:flex-row-reverse" , "w-full lg:h-[25rem] relative flex flex-col gap-6 rounded-md shadow-sm bg-white overflow-hidden lg:flex-row lg:items-center")}>
        <div className={classNames(flip && "lg:rounded-tl-none" ,"w-full h-full rounded-tl-md rounded-tr-md lg:rounded-tr-none overflow-hidden")}>
            <img src={image} className="w-full h-full object-cover" alt="admission process" />
        </div>
        <div className="flex flex-col gap-4 p-6">
            <h2 className="text-2xl text-[#333333] font-normal">
                <span className="text-[#1054c8]">0{digit}.</span> {title}
            </h2>
            <div className="flex items-end gap-4">
                <p className="text-[#54585f] text-base md:text-lg font-light leading-6">{description}</p>
                <h3 className={classNames(flip && "right-0 left-[45%]", "relative transform translate-y-6 lg:absolute lg:bottom-2 lg:right-4 lg:translate-y-0 text-[#f2f2f2] text-[3.125rem] lg:text-6xl font-semibold")}>0{digit}</h3>
            </div>
        </div>
    </div>
  )
}

export default Process;