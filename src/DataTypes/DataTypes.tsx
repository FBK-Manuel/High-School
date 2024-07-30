import { FaGlobeAmericas, FaUsers } from "react-icons/fa";
import { IoHomeOutline, IoNewspaper } from "react-icons/io5";
import { MdContactPhone, MdEventAvailable } from "react-icons/md";
import { SiBookstack } from "react-icons/si";

// datatype for the icons use in the navbar
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

// as the name implies footer page
export type footerType = {
  title: string;
  description: string;
};

// for sliders in the home page
export type sliderType = {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
};

// used in the signup page
export type formDataType = {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
  confirmPassword: string;
};
// used in the signup page
export type formDataErrorType = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  role?: string;
};

// used in the signin page
export type LoginformDataType = {
  email: string;
  role: string;
  password: string;
};
// used in the signin page
export type LoginformDataErrorType = {
  email?: string;
  password?: string;
  role?: string;
};

// type for header component that states current route
export type landingPageRouteHeader = {
  routeTitle: string;
  routeName: string;
};

// type for perks component
export type perks = {
  icon: React.ReactNode;
  heading: string;
  summary: string;
};

// type for social media handles data
type socialMediaHandles = {
  ig: string;
  twitter: string;
  facebook: string;
  linkedin: string;
};

// type for teacher component
export type teacher = {
  image: string;
  fullName: string;
  subject: string;
  social: socialMediaHandles;
};

export type ScrollToTopButtonType = {
  handleClick: () => void;
};
