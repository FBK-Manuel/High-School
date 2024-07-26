import { IoHomeOutline, IoNewspaper } from "react-icons/io5";
import { NavBarType } from "../../DataTypes/DataTypes";
import { SiBookstack } from "react-icons/si";
import { FaGlobeAmericas, FaUsers } from "react-icons/fa";
import { MdContactPhone, MdEventAvailable } from "react-icons/md";
export const navLinks: NavBarType[] = [
  {
    name: "Home",
    path: "/",
    icon: IoHomeOutline,
  },
  {
    name: "About",
    path: "about",
    icon: FaUsers,
  },
  {
    name: "Academics",
    path: "academics",
    icon: SiBookstack,
  },
  {
    name: "News",
    path: "news",
    icon: IoNewspaper,
  },
  {
    name: "Events",
    path: "events",
    icon: MdEventAvailable,
  },
  {
    name: "Others",
    path: "others",
    icon: FaGlobeAmericas,
  },
  {
    name: "Contact",
    path: "contact",
    icon: MdContactPhone,
  },
];
