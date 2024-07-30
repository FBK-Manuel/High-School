// types
import { teacher } from "../../DataTypes/DataTypes";

// icons
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin  } from "react-icons/fa6";

const Teacher: React.FC<teacher> = ({image, fullName, subject, social}) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-md px-2 py-6 border border-[#e7e8eb] shadow-sm hover:border-[#d1d4d9] hover:shadow transition-all duration-300 group">
        <div className="w-full max-w-[15.375rem] h-[15.375rem] rounded-full overflow-hidden border border-[#e7e8eb] group-hover:border-[#d1d4d9]">
            <img src={image} className="w-full h-full object-cover " alt="teacher's profile" />
        </div>
        <h3 className="text-base lg:text-lg text-[#333333] font-medium">{fullName}</h3>
        <div className="flex items-center gap-4">
            <a href={social.ig} className="group/link"  target="_blank">
                <FaInstagram className="size-5 text-[#54585f] group-hover/link:text-[#4c5fd7] transition-all duration-300" />
            </a>
            <a href={social.twitter} className="group/link"  target="_blank">
                <FaTwitter className="size-5 text-[#54585f] group-hover/link:text-[#1da1f2] transition-all duration-300" />
            </a>
            <a href={social.facebook} className="group/link"  target="_blank">
                <FaFacebook className="size-5 text-[#54585f] group-hover/link:text-[#1877f2] transition-all duration-300" />
            </a>
            <a href={social.linkedin} className="group/link"  target="_blank">
                <FaLinkedin className="size-5 text-[#54585f] group-hover/link:text-[#0a66c2] transition-all duration-300" />
            </a>
        </div>
        <p className="text-base italic text-[#54585f] font-normal">{subject}</p>
    </div>
  )
}

export default Teacher;

// border-[#d1d4d9]