import Image from "next/image"
import DerekAustin from "@/images/DerekAustin.png"

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
    <div className="h-screen bg-[#b9e3ff]">
      <div className="mx-auto w-4/5">
        <div className="mb-auto py-4">
          <h2 className="text-7xl">About</h2>
        </div>
        {/*========= DR DEREK AUSTIN IMAGE ========= */}
        <div className="relative h-[75vh]">
          <div className="w-[65%] overflow-hidden rounded-tr-[6rem]">
            <Image
              src={DerekAustin}
              alt="Dr Derek Austin"
              className="w-full object-cover"
            />
          </div>
          <div className="h-3/5">
            <div className="w-4/5">
              <p className="restorabold pb-3 pt-5 text-2xl">Tech Stack</p>
            </div>
            {/* ========= TECH STACK ============ */}
            <div className="flex w-5/6 flex-wrap content-between gap-x-2">
              {techStack.map((item: string) => (
                <p
                  key={item}
                  className="mb-3 rounded-tr-xl bg-[#FFE366] py-1 pl-2 pr-2 text-xl"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStackSection
