import { Link } from "react-router-dom";
import { landingPageRouteHeader } from "../../DataTypes/DataTypes";

const Header: React.FC<landingPageRouteHeader> = ({routeTitle, routeName}) => {
  return (
    <section className="bg-[#F2F2F2] h-[86dvh] flex flex-col items-center justify-center gap-2">
        <h1 className="text-[#333333] text-[1.625rem] md:text-5xl">{routeTitle}</h1>
        <div className="flex items-center gap-2 text-[#4d5056] text-base md:text-lg font-light">
          <h2 className="hover:text-[#1054c8] transition-all duration-300">
            <Link to={"/"}>Home</Link>
          </h2>
          <span>/</span>
          <h2>{routeName}</h2>
        </div>
    </section>
  )
}

export default Header;