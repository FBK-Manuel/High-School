import { brand1, brand2, brand3, brand4, brand5, brand6 } from "../../assets/images";

const Brands: React.FC = () => {
  return (
    <section className="flex flex-col gap-6 md:gap-8 lg:gap-20 w-[94%] mx-auto my-6 md:my-8 lg:my-24">
        <div className="flex flex-col gap-2">
            <p className="text-[#54585f] text-center text-base md:text-lg tracking-widest md:tracking-[0.1875em] uppercase">Because we care</p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#333333] text-center font-medium">
                Our Valuable <span className="text-[#1054c8]">Donors</span>
            </h1>
        </div>
        
        <div className='overflow-hidden mask w-full max-w-[60rem] mx-auto'>
            <div className='maskAnimation flex gap-8 md:gap-10 items-center justify-center md:justify-between '>
                <img className='w-full max-w-[10.25rem] h-[3.125rem]   object-contain' src={brand1} alt="brand" />
                <img className='w-full max-w-[10.25rem] h-[3.125rem]  object-contain' src={brand2} alt="brand" />
                <img className='w-full max-w-[10.25rem] h-[3.125rem]  object-contain' src={brand3} alt="brand" />
                <img className='w-full max-w-[10.25rem] h-[3.125rem] object-contain' src={brand4} alt="brand" />
                <img className='w-full max-w-[10.25rem] h-[3.125rem]  object-contain' src={brand5} alt="brand" />
                <img className='w-full max-w-[10.25rem] h-[3.125rem]   object-contain' src={brand6} alt="brand" />
                <img className='w-full max-w-[10.25rem] h-[3.125rem]   object-contain' src={brand1} alt="brand" />
                <img className='w-full max-w-[10.25rem] h-[3.125rem]  object-contain' src={brand2} alt="brand" />
                <img className='w-full max-w-[10.25rem] h-[3.125rem]  object-contain' src={brand3} alt="brand" />
                <img className='w-full max-w-[10.25rem] h-[3.125rem] object-contain' src={brand4} alt="brand" />
                <img className='w-full max-w-[10.25rem] h-[3.125rem]  object-contain' src={brand5} alt="brand" />
                <img className='w-full max-w-[10.25rem] h-[3.125rem]   object-contain' src={brand6} alt="brand" />
            </div>
        </div>
        
    </section>
  )
}

export default Brands;