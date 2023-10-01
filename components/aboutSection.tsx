import DerekAustin from "@/images/DerekAustin.png"
import Image from "next/image"

const AboutSection = () => {
  /* TECHNOLOGIES USED, IN YELLOW BACKGROUND */
  const techStack = [
    "Node.js",
    "Typescript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Vercel",
    "Github Actions",
    "React Query",
    "Redux / Redux Toolkit",
    "Jest",
    "Cypress",
    "React Testing Library",
    "Playwright",
    "Tailwind CSS",
  ]

  return (
    <div className="blue-bg-img h-screen">
      <div className="mx-auto w-4/5 md:w-[90%] lg:w-3/4">
        <div className="py-4 md:relative md:py-8 lg:pb-10 lg:pt-14">
          <h2 className="text-7xl md:text-8xl lg:text-9xl lg:font-semibold">
            About
          </h2>
          {/* ======== TECH STACK ========= */}
          <div className="hidden absolute inset-y-1/2 right-0 h-9 w-[45%] md:block lg:inset-y-2/3">
            <div>
              <p className="text-xl pb-3">Tech Stack</p>
            </div>
            <div className="flex flex-wrap content-between gap-x-4">
              {techStack.map((item: string) => (
                <p
                  key={`${item}-tech-stack-key`}
                  className="mb-2 rounded-tr-xl bg-[#FFE366] py-1 pl-2 pr-2 md:text-sm md:font-semibold lg:text-lg"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="relative h-[85vh] md:h-[70vh]">
          {/* ======= DR DEREK AUSTIN IMAGE ========= */}
          <div className="w-[65%] overflow-hidden rounded-tr-[6rem] md:w-1/2 md:rounded-tr-[4.5rem] lg:w-[45%]">
            <Image
              src={DerekAustin}
              alt="Dr Derek Austin"
              className="w-full object-cover"
            />
          </div>
          {/* ======== ABOUT TEXT ========= */}
          <div className="py-5 px-5 absolute -bottom-4 left-6 rounded-tl-3xl bg-[#FB70AA] md:-bottom-8 md:left-auto md:right-0 md:w-[60%] lg:w-1/2 lg:right-36 lg:left-auto lg:py-7 lg:px-10 lg:bottom-12">
            <p className="text-lg leading-7 text-white lg:text-xl lg:leading-9">
              {`Derek Austin, a lead Frontend Developer and React Software Engineer, excels in web performance, accessible code, and intuitive interfaces. With expertise in Next.js, TypeScript, and Tailwind, he builds responsive apps, leads teams, and establishes best practices. Derek's solutions prioritize user needs, deliver high-quality code, and foster performance and maintainability. With a background in physical therapy and over 20 years of freelancing experience, his unique insights drive impactful results. Discover Derek's expertise in React, Agile processes, and full-stack architecture.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
