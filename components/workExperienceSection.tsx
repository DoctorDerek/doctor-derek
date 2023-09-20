
const WorkExperienceSection = () => {
    return (
        <div className="h-screen">
        <div className="bg-[#89CFFD] py-2 px-2 rounded-bl-3xl">
          <div className="w-4/5 mx-auto">
            <div className="text-right">
              <h2 className="text-7xl">Work</h2>
              <h2 className="text-7xl">Experience</h2>
            </div>
          </div>
        </div>

        {/* ========= POSITION ============ */}
        <div className="h-4/6">
          <div className="w-4/5 mx-auto">
            <ul className="mt-7 work-exp">
              {/* ===== TOP POSITION ====== */}
              <li className="text-[#997f59] code-icon">
                01/2023 - Present
              </li>
              <li className="border-l-4 pl-5 ml-2 py-1 border-[#F38B57] text-[#311B4D] text-lg">
                Senior Full-Stack Developer
              </li>
              <li className="border-l-4 pl-5 ml-2 pb-3 border-[#F38B57] text-[#311B4D]">
                Premium
              </li>
              {/* ===== MIDDLE POSITION ====== */}
              <li className="text-[#997f59] code-icon">
                01/2023 - Present
              </li>
              <li className="border-l-4 pl-5 ml-2 py-1 border-[#F38B57] text-[#311B4D] text-lg">
                Senior Full-Stack Developer
              </li>
              <li className="border-l-4 pl-5 ml-2 pb-3 border-[#F38B57] text-[#311B4D]">
                Premium
              </li>
              {/* ===== BOTTOM POSITION ====== */}
              <li className="text-[#997f59] code-icon">
                08/2019 - Present
              </li>
              <li className="border-l-4 pl-5 ml-2 border-[#F38B57] text-[#311B4D] text-lg">
                React Technical Writer {`(JavaScript)`}
              </li>
              <li className="border-l-4 pl-5 border-b-4 pb-3 ml-2 rounded-bl-2xl border-[#F38B57] text-[#311B4D]">
                Medium
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default WorkExperienceSection