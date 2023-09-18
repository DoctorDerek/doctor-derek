import Head from "next/head"
import ReactFullpage from "@fullpage/react-fullpage"
import D0_Intro_Animation from "@/images/D0_Intro_Animation.jpg"
import D1_Intro from "@/images/D1_Intro.jpg"
import D2_About from "@/images/D2_About.jpg"
import D3_Experience from "@/images/D3_Experience.jpg"
import D4_Portfolio from "@/images/D4_Portfolio.jpg"
import D5_Testimonials from "@/images/D5_Testimonials.jpg"
import D6_Blog from "@/images/D6_Blog.jpg"
import D7_Contact_Original from "@/images/D7_Contact_Original.jpg"
import M0_Intro_Animation from "@/images/M0_Intro_Animation.jpg"
import M1_Intro from "@/images/M1_Intro.jpg"
import M2_About_A from "@/images/M2_About_A.jpg"
import M2_About_B from "@/images/M2_About_B.jpg"
import M3_Experience_A from "@/images/M3_Experience_A.jpg"
import M3_Experience_B from "@/images/M3_Experience_B.jpg"
import M3_Experience_C from "@/images/M3_Experience_C.jpg"
import M3_Experience_D from "@/images/M3_Experience_D.jpg"
import M4_Portfolio from "@/images/M4_Portfolio.jpg"
import M5_Testimonials from "@/images/M5_Testimonials.jpg"
import M6_Blog_A from "@/images/M6_Blog_A.jpg"
import M6_Blog_B from "@/images/M6_Blog_B.jpg"
import M7_Contact from "@/images/M7_Contact.jpg"
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import Layout from "@/components/layout"
import IconLinks from "@/components/iconLinks"
import DrDerekAustin from "@/images/DrDerekAustin.png"
import JohnDoe from "@/images/johndoe.png"
import clock from "@/images/clock.png"
import Link from "next/link"

const DesktopSections = [
  D0_Intro_Animation,
  D1_Intro,
  D2_About,
  D3_Experience,
  D4_Portfolio,
  D5_Testimonials,
  D6_Blog,
  D7_Contact_Original,
]

const MobileSections = [
  // M0_Intro_Animation,
  M1_Intro,
  M2_About_A,
  M2_About_B,
  M3_Experience_A,
  M3_Experience_B,
  M3_Experience_C,
  M3_Experience_D,
  M4_Portfolio,
  M5_Testimonials,
  M6_Blog_A,
  M6_Blog_B,
  M7_Contact,
]

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

/** Helper function to join Tailwind CSS classNames. Filters out falsy values */
const classNames = (...args: string[]) => args.filter(Boolean).join(" ")

function DisplaySections({
  sections,
  aspect,
}: {
  sections: StaticImageData[]
  /** The aspect ratio of the images, i.e. desktop | mobile */
  aspect: "aspect-[5760/3200]" | "aspect-[1500/2668]"
}) {
  return (
    <ReactFullpage
      credits={{ enabled: false }}
      navigation
      render={() => {
        // We don't need any of the props here, but I list them for reference
        //  render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Layout>
              {/* ========= TOP IMAGE ============ */}
              <div className="section bg-[#FFE366]">
                <Image
                  src={M0_Intro_Animation}
                  alt={"MO_Intro_Animation"}
                  className={classNames(
                    // We use "bg-yellow" to fill in the background (sides)
                    "h-[100dvh] w-full object-contain",
                    aspect,
                  )}
                  placeholder="blur"
                />
              </div>

              {/* ========= INTRO SECTION ============ */}
              <div className="section bg-[#FFE366]">
                <div className="h-screen">
                  <div className="h-5/6 flex flex-col">
                    <div className="w-4/5 mx-auto pt-4">
                      <p className="text-[#FB70AA] text-3xl font-medium">
                        React Software Engineer specializing in optimizing web
                        performance, enhancing accessiblility, and crafting
                        highly readable code.
                      </p>
                    </div>
                    {/* ========= ICON LINKS ============ */}
                    <div className="w-4/5 mx-auto pt-4 mt-auto">
                      <div className="w-3/4">
                        <IconLinks
                          fill={"#F38B57"}
                          flexSpacing={"justify-between"}
                        />
                        <div className="border-t-2 border-[#d6bb61] mt-4"></div>
                      </div>
                    </div>

                    {/* ========= CLIENTS & LOGOs ============ */}
                    <div className="w-4/5 mx-auto mt-2">
                      <p className="text-[#998F8F] text-2xl font-extralight pt-3 pb-3">
                        Clients
                      </p>
                      <div className="flex w-full justify-between">
                        <p className="w-1/4 text-[#998F8F] text-4xl font-medium">
                          Logo
                        </p>
                        <p className="w-1/4 text-[#998F8F] text-4xl font-medium">
                          Logo
                        </p>
                        <p className="w-1/4 text-[#998F8F] text-4xl font-medium">
                          Logo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*========= ABOUT SECTION ========= */}
              <div className="section bg-[#b9e3ff]">
                <div className="h-screen">
                  <div className="w-4/5 mx-auto pt-4">
                    <div className="w-4/5 pb-4">
                      <h2 className="text-6xl">About</h2>
                    </div>
                    {/* ======= DR DEREK AUSTIN IMAGE ========= */}
                    <div>
                      <Image
                        src={DrDerekAustin}
                        alt="Dr Derek Austin"
                        object-fit="contain"
                      />
                    </div>
                    {/* ======== ABOUT TEXT ========= */}
                    <div className="bg-[#FB70AA] rounded-tl-3xl relative bottom-5 left-4">
                      <p className="text-white pt-3 pb-6 pl-4 pr-4 leading-7">
                        {`Derek Austin, a Lead Frontend Developer and React Software Engineer, excels in web performance, accessible code, and intuitive interfaces. With expertise in Next.js, TypeScript, and Tailwind, he builds responsive apps, leads teams, and establishes best practices. Derek's solutions prioritize user needs, deliver high-quality code, and foster performance and maintainability. With a background in physical therapy and over 20 years of freelancing experience, his unique insights drive impactful results. Discover Derek's expertise in React, Agile processes, and full-stack architecture.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/*========= ABOUT SECTION WITH TECH STACK ========= */}
              <div className="section bg-[#b9e3ff]">
                <div className="h-screen">
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
              </div>

              {/*========= WORK EXPERIENCE SECTION ========= */}
              <div className="section bg-[#FFE366]">
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
              </div>

              {/*========= PORTFOLIO SECTION ========= */}
              <div className="section bg-[#FB70AA]">
                <div className="h-screen">
                  <div className="py-4">
                    <div className="w-4/5 mx-auto">
                      <div className="text-center">
                        <h2 className="text-7xl">Portfolio</h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-11/12 h-1/3 mx-auto mb-1 bg-white rounded-tr-3xl"></div>
                  <div className="w-11/12  mx-auto bg-[#89CFFD] pt-2 pl-3 pr-3 pb-4">
                    <h3 className="text-3xl mb-2">
                      Project Title Lorem Ipsum Dolor Sit Amet
                    </h3>
                    <p className="text-xl">
                      Duis aute irure dolor in reprehenderit in volputate velit
                      esse cillum dolore eu fugasdiate nulla pariateur.
                      Excepteur sint occaecat cupidtat non proident, sunt in
                      culpa qui offcia deserunt.
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
              </div>

              {/*========= TESIMONIALS SECTION ========= */}
              <div className="section bg-[#FB70AA]">
                <div className="h-screen flex flex-col">
                  <div className="pt-4 px-2 mb-16">
                    <div className="w-5/6 mx-auto">
                      <div className=" text-white">
                        <p className="text-lg">
                          Consequat interdum varius sit amet mattis vulputate.
                          Laoreet non curabitur gravida arcu ac tortor. Id
                          semper risus in hendrerit gravida rutrum quisque non.
                          Consectetur a erat nam at lectus. Venenatis tellus in
                          metus vulputate eu. Pharetra massa massa ultricies mi
                          quis hendrerit. Non sodales neque sodales ut etiam sit
                          amet nisl. Cursus mattis molestie a iaculis at erat.
                          Erat pellentesque adipiscing commodo elit at imperdiet
                          dui accumsan. Nibh praesent tristique magna sit. Lorem
                          ipsum dolor sit amet consectetur adipiscing elit
                          pellentesque habitant.
                        </p>

                        <div className="mt-5">
                          <div className="flex content-center py-1 ">
                            <div className="py-3">
                              <Image
                                src={JohnDoe}
                                alt="John Doe"
                                objectFit="contain"
                              />
                            </div>

                            <div className="ml-4 w-3/5">
                              <h4>-John Doe</h4>
                              <h5>Sr. Systems Design Manager at Lorem Ipsum</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ========= WHAT PEOPLE SAY ============ */}
                  <div className="bg-[#89CFFD] rounded-tl-3xl h-1/4">
                    <div className="w-5/6 mx-auto py-2 px-2">
                      <h3 className="text-7xl mb-2 text-right">
                        What People Say
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========= BLOG SECTION ============ */}
              <div className="section bg-[#F38B57]">
                <div className="h-screen">
                  <div className="h-5/6 flex flex-col">
                    <div className="w-4/5 mx-auto pt-6">
                      <h2 className="text-7xl">Blog</h2>
                      <p className="pt-6 text-2xl font-base leading-8">
                        In addition to being a knowledgeable and experienced
                        developer, Derek is an avid writer who has been
                        contributing his thoughts to the industry since 2019.
                      </p>
                    </div>

                    <div className="w-4/5 mx-auto mt-6">
                      <div className="w-1/3">
                        {/* p element needs to be changed to a hyperlink */}
                        <p className="text-center py-4 px-1 text-lg font-medium bg-[#FFE366] rounded-tr-2xl">
                          View All Posts
                        </p>
                      </div>

                      <div className="mt-3">
                        <p className="text-lg">6k followers on Medium</p>
                      </div>

                      {/* ========== SIGN UP =========== */}
                      <div className="py-6 rounded-tl-2xl">
                        <div className="">
                          <div className="border-t-2 border-[#cd7656] mt-2 mb-7 w-4/5"></div>
                          <h3 className="text-xl pb-3">
                            Join over 160 email subscribers
                          </h3>
                          <form className="flex">
                            <input
                              type="email"
                              name="email-address"
                              id="email-address"
                              autoComplete="email"
                              required
                              className="w-9/12 min-w-0 appearance-none border-0 px-3 py-1.5 text-base bg-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                              placeholder="Your email address"
                            />
                            <div className="w-1/4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                              <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-tr-md px-3 py-6 text-sm font-semibold text-[#FFE366] shadow-sm bg-[#311B4D]"
                              >
                                Sign up
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>

                      {/* ========== READ POSTS ARROW =========== */}
                      <div className="mt-5 text-white">
                        <div className="flex py-2">
                          <p className="text-4xl">&darr;</p>
                          {/* change to hyperlink */}
                          <h4 className="ml-2 text-lg my-auto">Read posts</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ========= POSTS SECTION ============ */}
              <div className="section bg-[#F38B57]">
                <div className="h-screen">
                  {/* ====== POST IMAGE ====== */}
                  <div className="flex flex-col w-4/5 mx-auto">
                    <div className="border-2 border-black mt-8">
                      <div className="">
                        <Image
                          src={clock}
                          alt="How to user Readonly in Typescript"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <p className="pl-3 text-white bg-[#FB70AA] w-3/4 py-4 rounded-tr-xl">
                          How to use Readonly in Typescript
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="w-5/6 bg-[#b9e3ff]">
                        <p className="pl-3 py-2 ">
                          Exploring the power of built-in utility types for
                          safer code — TypeScript has introduced a variety of
                          utility types, designed to help transform and
                          manipulate ty...
                        </p>
                        <p className="pl-3 pb-2  text-[#747fa6]">6 min read | May 21, 2023</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="w-5/6">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* {sections.map((section) => (
                <div className="section" key={section.src}>
                  <Image
                    src={section}
                    alt={section.src}
                    className={classNames(
                      // We use "bg-yellow" to fill in the background (sides)
                      "absolute top-0 h-[100dvh] w-full bg-[#FFE366] object-contain",
                      aspect,
                    )}
                    placeholder="blur"
                  />
                </div>
              ))} */}
            </Layout>
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

/** Custom hook that returns the current window width for mobile vs. desktop */
function useWindowWidth() {
  const [width, setWidth] = useState(0)
  // We need to have a `useEffect` wrapper to prevent hydration errors.
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!width) setWidth(window.innerWidth)
      window.addEventListener("resize", () => setWidth(window.innerWidth))
    }
  }, [width])
  return { width }
}

/** Unfortunately, we have to use a hook to determine the width to
 * conditionally render mobile and desktop because otherwise fullPage.js will
 * find all of the "hidden" `<div>` elements with the className of "section" */
export default function Home() {
  const { width } = useWindowWidth()
  return (
    <>
      <Head>
        <title>
          Dr. Derek Austin - Senior Frontend Developer & React Software Engineer
          - @DoctorDerek
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Rive src="https://cdn.rive.app/animations/vehicles.riv" /> */}
      <iframe
        allowFullScreen
        src="https://rive.app/s/0PCnhbxltU_9fMHg94CxVg/embed"
        // We use "pointer-events-none" to prevent capturing scroll or clicks.
        className="pointer-events-none absolute inset-0 z-10 h-full w-full"
      />
      {/* <Rive src="https://rive.app/s/0PCnhbxltU_9fMHg94CxVg/embed" /> */}

      <Layout>
        {/* =======LAYOUT ===== */}
        {width < 768 && (
          <DisplaySections
            sections={MobileSections}
            aspect="aspect-[1500/2668]"
          />
        )}
        {width >= 768 && (
          <DisplaySections
            sections={DesktopSections}
            aspect="aspect-[5760/3200]"
          />
        )}
      </Layout>
    </>
  )
}
