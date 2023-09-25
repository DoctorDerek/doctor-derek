import IconLinks from "./iconLinks"

const IntroSection = () => {
  return (
    <div className="flex flex-col h-[90vh]">
      <div className="w-4/5 mx-auto pt-4">
        <p className="text-[#FB70AA] text-3xl font-medium">
          React Software Engineer specializing in optimizing web performance,
          enhancing accessiblility, and crafting highly readable code.
        </p>
      </div>
      {/* ========= ICON LINKS ============ */}
      <div className="w-4/5 mx-auto pt-4 mt-auto">
        <div className="w-3/4">
          <IconLinks fill={"#F38B57"} flexSpacing={"justify-between"} />
          <div className="border-t-2 border-[#d6bb61] mt-4"/>
        </div>
      </div>

      {/* ========= CLIENTS & LOGOs ============ */}
      <div className="w-4/5 mx-auto mt-2 mb-10">
        <p className="text-[#998F8F] text-2xl font-extralight pt-3 pb-3">
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
