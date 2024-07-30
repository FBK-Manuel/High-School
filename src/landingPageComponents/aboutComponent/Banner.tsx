import { useRef, useEffect } from "react";

// typed animation package
import Typed from "typed.js";

const Banner: React.FC = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['leader', 'founder', 'CEO'],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);

  return (
    <section className="relative w-full h-[21.875rem] md:h-[34.375rem] flex items-center justify-center my-6 md:my-8 lg:my-12 banner">
        <div className="absolute w-full h-full bg-black bg-opacity-35 blur-sm"></div>
        <h1 className="text-white text-center text-3xl font-medium leading-tight sm:text-4xl md:text-5xl md:max-w-[40%] transition-all duration-500 relative z-10">Today a reader. Tomorrow a <span ref={el} className="text-[#1054c8]"></span></h1>
    </section>
  )
}

export default Banner;