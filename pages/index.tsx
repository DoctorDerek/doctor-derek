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
import JohnDoe from "@/images/johndoe.png"
import clock from "@/images/clock.png"
import contactimage from "@/images/contactimage.png"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import IntroSection from "@/components/introSection"
import AboutSection from "@/components/aboutSection"
import DrDerekAustin from "@/images/DrDerekAustin.png"
import TechStackSection from "@/components/techStackSection"
import WorkExperienceSection from "@/components/workExperienceSection"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/testimonials"
import BlogSection from "@/components/blogSection"

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
      fixedElements="#header"
      render={() => {
        // We don't need any of the props here, but I list them for reference
        //  render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
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
                <IntroSection />
              </div>
            </div>

            {/*========= ABOUT SECTION ========= */}
            <div className="section bg-[#b9e3ff]">
              <AboutSection />
            </div>

            {/*========= ABOUT SECTION WITH TECH STACK ========= */}
            <div className="section bg-[#b9e3ff]">
              <TechStackSection />
            </div>

            {/*========= WORK EXPERIENCE SECTION ========= */}
            <div className="section bg-[#FFE366]">
              <WorkExperienceSection />
            </div>

            {/*========= PORTFOLIO SECTION ========= */}
            <div className="section bg-[#FB70AA]">
              <Portfolio />
            </div>

            {/*========= TESIMONIALS SECTION ========= */}
            <div className="section bg-[#FB70AA]">
              <Testimonials />
            </div>

            {/* ========= BLOG SECTION ============ */}
            <div className="section bg-[#F38B57]">
              <BlogSection />
            </div>

            {/* ========= POSTS SECTION ============ */}
            <div className="section bg-[#F38B57]">
              <div className="h-screen">
                {/* ====== POST IMAGE ====== */}
                <div className="flex flex-col w-4/5 mx-auto h-5/6">
                  <div className="mt-8 relative w-3/4">
                    <p className="bg-[#FFE366] rounded-tr-xl pl-3 pr-3 py-1 text-xl mb-2 absolute -top-3 left-4 font-light">
                      Typescript
                    </p>
                    <Image
                      src={clock}
                      alt="How to user Readonly in Typescript"
                      style={{ objectFit: "cover" }}
                    />
                    <p className="pl-3 py-2 pr-3 text-white text-xl bg-[#FB70AA] w-4/5 rounded-tr-xl absolute -bottom-6">
                      How to use Readonly in Typescript
                    </p>
                  </div>
                  <div className="w-3/4 bg-[#b9e3ff]">
                    <p className="pl-3 pb-2 pt-7 px-2 text-medium">
                      Exploring the power of built-in utility types for safer
                      code — TypeScript has introduced a variety of utility
                      types, designed to help transform and manipulate ty...
                    </p>
                    <p className="pl-3 pb-2 text-[#747fa6]">
                      6 min read | May 21, 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ========= CONTACT SECTION ============ */}
            <div className="section">
              <div className="h-[60vh] bg-[#311B4D]">
                <div className="w-4/5 mx-auto">
                  <div className="">
                    <h2 className="text-6xl text-[#FFE366]">Contact</h2>
                  </div>
                  {/*========= DR DEREK AUSTIN IMAGE ========= */}
                  <div className="">
                    <Image
                      src={contactimage}
                      alt="Contact Dr Derek Austin"
                      object-fit="contain"
                    />
                    <div className="">
                      <p className="pt-3 pr-4 leading-7 text-[#89CFFD] text-lg w-5/6 ">
                        Discover the power of versatile frontend developing with
                        Derek Austin. Get in touch to discuss your next
                        development project, or to simply chat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    </>
  )
}
