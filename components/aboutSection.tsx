import DrDerekAustin from "@/images/DrDerekAustin.png"
import Image from "next/image"

const AboutSection = () => {
  return (
    <div className="h-[90vh] md:h-screen">
      <div className="w-4/5 mx-auto pt-4">
        <div className="w-4/5 pb-4">
          <h2 className="text-6xl">About</h2>
        </div>
        {/* ======= DR DEREK AUSTIN IMAGE ========= */}
        <div className="">
          <Image
            src={DrDerekAustin}
            alt="Dr Derek Austin"
          />
        </div>
        {/* ======== ABOUT TEXT ========= */}
        <div className="bg-[#FB70AA] rounded-tl-3xl relative bottom-5 left-4 pb-4">
          <p className="text-white pt-3 pl-4 pr-4 leading-7">
            {`Derek Austin, a lead Frontend Developer and React Software Engineer, excels in web performance, accessible code, and intuitive interfaces. With expertise in Next.js, TypeScript, and Tailwind, he builds responsive apps, leads teams, and establishes best practices. Derek's solutions prioritize user needs, deliver high-quality code, and foster performance and maintainability. With a background in physical therapy and over 20 years of freelancing experience, his unique insights drive impactful results. Discover Derek's expertise in React, Agile processes, and full-stack architecture.`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
