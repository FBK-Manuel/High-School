import { FaGlobeAmericas, FaUsers } from "react-icons/fa";
import { IoHomeOutline, IoNewspaper } from "react-icons/io5";
import { MdContactPhone, MdEventAvailable } from "react-icons/md";
import { SiBookstack } from "react-icons/si";

export type NavBarType = {
  name: string;
  path: string;
  icon:
    | typeof IoHomeOutline
    | typeof FaUsers
    | typeof SiBookstack
    | typeof IoNewspaper
    | typeof MdEventAvailable
    | typeof MdContactPhone
    | typeof FaGlobeAmericas;
};

export type footerType = {
  title: string;
  description: string;
};

export type sliderType = {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
};
