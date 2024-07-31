// icons
import { GrMapLocation } from "react-icons/gr";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineMailOutline } from "react-icons/md";


const Info: React.FC = () => {
  return (
    <section className="flex-1 flex flex-col gap-4">
      {/* Address container */}
      <div className="flex flex-col gap-5 border-b border-[#e7e8eb] pb-6">
        <div className="flex items-center gap-4">
          <GrMapLocation className="size-8 text-[#8cc63e]" />
          <h3 className="text-lg md:text-xl font-medium text-[#333333]">Address</h3>
        </div>
        <p className="text-base md:text-lg text-[#54585f] font-normal">2025 Johnpaul Springs Suite 366</p>
      </div>

      {/* Phone container */}
      <div className="flex flex-col gap-5 border-b border-[#e7e8eb] pb-6">
        <div className="flex items-center gap-4">
          <HiOutlineDevicePhoneMobile className="size-8 text-[#8cc63e]" />
          <h3 className="text-lg md:text-xl font-medium text-[#333333]">Phone</h3>
        </div>
        <div className="inline-flex flex-col gap-1">
          <p className="text-base md:text-lg text-[#54585f] font-normal">Mobile: (+88) 090 1900 - 6886</p>
          <p className="text-base md:text-lg text-[#54585f] font-normal">Hotline: 1800 6886</p>
        </div>
      </div>

      {/* Email container */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <MdOutlineMailOutline className="size-8 text-[#8cc63e]" />
          <h3 className="text-lg md:text-xl font-medium text-[#333333]">Email</h3>
        </div>
        <div className="inline-flex flex-col gap-1">
          <p className="text-base md:text-lg text-[#54585f] font-normal">support@hastech.company</p>
          <p className="text-base md:text-lg text-[#54585f] font-normal">yourmail@domain.com</p>
        </div>
      </div>
    </section>
  )
}

export default Info;