import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <section className="bg-[#F2F2F2] h-[86dvh] flex flex-col items-center justify-center">
        <h1 className="text-[#333333] text-[1.625rem] md:text-5xl">About Us</h1>
        <div className="flex items-center gap-2 text-[#ababab] text-base">
          <h2><Link to={"/"}>Home</Link></h2>
          <span>/</span>
          <h2>About</h2>
        </div>
    </section>
  )
}

export default Header;