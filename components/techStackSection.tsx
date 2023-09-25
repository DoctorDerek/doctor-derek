import Image from "next/image"
import DrDerekAustin from "@/images/DrDerekAustin.png"

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

const TechStackSection = () => {
    return (
        <div className="bg-[#b9e3ff] h-[90vh]">
        <div className="h-2/5">
          <div className="w-4/5 mx-auto">
            <div className="mb-auto pt-3">
              <h2 className="text-6xl">About</h2>
            </div>
            {/*========= DR DEREK AUSTIN IMAGE ========= */}
            <div className="pt-4">
              <Image
                src={DrDerekAustin}
                alt="Dr Derek Austin"
                object-fit="contain"
              />
            </div>
          </div>
        </div>

        {/* ========= TECH STACK ============ */}
        <div className="h-3/5">
          <div className="w-4/5 mx-auto">
            <p className="pt-5 pb-3 text-2xl">Tech Stack</p>
          </div>
          <div className="w-4/5 mx-auto">
            <div className="flex flex-wrap gap-x-4 content-between w-5/6">
              {techStack.map((item: string) => (
                <p
                  key={item}
                  className="bg-[#FFE366] rounded-tr-xl pl-2 pr-2 py-1 text-xl mb-2"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}

export default TechStackSection; 