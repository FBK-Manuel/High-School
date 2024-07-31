

const Form: React.FC = () => {
  return (
    <section className="lg:flex-[2] flex flex-col gap-6">
      <h3 className="text-2xl md:text-3xl text-[#333333] font-normal">Get in touch</h3>

      <form action="" method="post">
        {/* name and email container */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <input 
            className="text-base text-[#54585f] font-light bg-[#f2f2f2] p-4 rounded-md w-full outline-none focus:border focus:border-[#e7e8eb] placeholder:text-[#a7a9b3] placeholder:text-base placeholder:font-light transition-all duration-300" 
            type="text" 
            placeholder="full name*"
            required 
          />
          <input 
            className="text-base text-[#54585f] font-light bg-[#f2f2f2] p-4 rounded-md w-full outline-none focus:border focus:border-[#e7e8eb] placeholder:text-[#a7a9b3] placeholder:text-base placeholder:font-light transition-all duration-300" 
            type="email" 
            placeholder="email*"
            required 
          />
        </div>
        {/* subject and phone container */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-6">
          <input 
            className="text-base text-[#54585f] font-light bg-[#f2f2f2] p-4 rounded-md w-full outline-none focus:border focus:border-[#e7e8eb] placeholder:text-[#a7a9b3] placeholder:text-base placeholder:font-light transition-all duration-300" 
            type="text" 
            placeholder="subject" 
          />
          <input 
            className="text-base text-[#54585f] font-light bg-[#f2f2f2] p-4 rounded-md w-full outline-none focus:border focus:border-[#e7e8eb] placeholder:text-[#a7a9b3] placeholder:text-base placeholder:font-light transition-all duration-300" 
            type="tel" 
            placeholder="phone*"
            required 
          />
        </div>
        {/* message area */}
        <textarea 
          className="text-base text-[#54585f] font-light bg-[#f2f2f2] p-4 rounded-md w-full outline-none border border-transparent focus:border-[#e7e8eb] mt-6 placeholder:text-[#a7a9b3] placeholder:text-base placeholder:font-light transition-all duration-300" 
          placeholder="message*" 
          cols={30} 
          rows={10}
          required
        >
        </textarea>
        {/* submit button */}
        <button type="submit" className="text-white bg-[#1054c8] text-base md:text-lg py-[0.5em] px-[1.5em] rounded-md mt-6">Submit</button>
      </form>
    </section>
  )
}

export default Form;