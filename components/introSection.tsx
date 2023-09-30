import IconLinks from "./iconLinks"

const IntroSection = () => {
  return (
    <div className="flex flex-col h-[90vh] intro md:h-screen">
      <div className="w-4/5 md:w-[90%] mx-auto pt-4">
        <p className="text-[#FB70AA] text-3xl md:text-5xl lg:text-7xl">
          React Software Engineer specializing in optimizing web performance,
          enhancing accessiblility, and crafting highly readable code.
        </p>
      </div>
      {/* ========= ICON LINKS ============ */}
      <div className="w-4/5 md:w-[90%] mx-auto pt-4 mt-auto lg:mb-8">
        <div className="w-3/4 lg:w-[60%]">
          <IconLinks fill={"#f38B57"} flexSpacing={"justify-between"} />
          <div className="border-t-2 border-[#d6bb61] mt-4 md:w-5/12 lg:mt-8 lg:w-1/3"/>
        </div>
      </div>

      {/* ========= CLIENTS & LOGOs ============ */}
      <div className="w-4/5 mx-auto  md:w-[90%] mt-2 mb-10">
        <p className="text-[#998F8F] text-2xl font-extralight pt-3 pb-3 lg:mb-8 lg:text-3xl">
          Clients
        </p>
        <div className="flex w-full justify-between">
          <p className="w-1/4 text-[#998F8F] text-4xl font-medium">Logo</p>
          <p className="w-1/4 text-[#998F8F] text-4xl font-medium">Logo</p>
          <p className="w-1/4 text-[#998F8F] text-4xl font-medium">Logo</p>
        </div>
      </div>
    </div>
  )
}

export default IntroSection
