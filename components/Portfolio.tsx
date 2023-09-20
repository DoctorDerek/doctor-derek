import DrDerekAustin from "@/images/DrDerekAustin.png"

const Portfolio = () => {
  return (
    <div className="h-screen">
      <div className="py-4">
        <div className="w-4/5 mx-auto">
          <div className="text-center">
            <h2 className="text-7xl">Portfolio</h2>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto"></div>
      <div className="w-11/12 h-1/3 mx-auto mb-1 bg-white rounded-tr-3xl"></div>
      <div className="w-11/12  mx-auto bg-[#89CFFD] pt-2 pl-3 pr-3 pb-4">
        <h3 className="text-3xl mb-2">
          Project Title Lorem Ipsum Dolor Sit Amet
        </h3>
        <p className="text-xl">
          Duis aute irure dolor in reprehenderit in volputate velit esse cillum
          dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat
          non proident, sunt in culpa qui offcia deserunt.
        </p>
        <div className="flex mt-3 gap-x-2">
          <p className="bg-[#FFE366] rounded-tr-xl pl-2 pr-2 py-1 text-xl mb-2">
            Lorem
          </p>
          <p className="bg-[#FFE366] rounded-tr-xl pl-2 pr-2 py-1 text-xl mb-2">
            Ipsum
          </p>
          <p className="bg-[#FFE366] rounded-tr-xl pl-2 pr-2 py-1 text-xl mb-2">
            Dolor
          </p>
          <p className="bg-[#FFE366] rounded-tr-xl pl-2 pr-2 py-1 text-xl mb-2">
            Amet
          </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
