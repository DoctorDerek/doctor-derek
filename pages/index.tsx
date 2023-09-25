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
import Navbar from "@/components/navbar"
import IntroSection from "@/components/introSection"
import AboutSection from "@/components/aboutSection"
import TechStackSection from "@/components/techStackSection"
import WorkExperienceSection from "@/components/workExperienceSection"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/testimonials"
import BlogSection from "@/components/blogSection"
import ContactSection from "@/components/contactSection"
import PostsSection from "@/components/PostsSection"
import SectionContainer from "@/components/sectionContainer"
import TopSection from "@/components/topSection"

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
      render={() => {
        // We don't need any of the props here, but I list them for reference
        //  render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {/* ========= TOP IMAGE ============ */}
            <SectionContainer>
              <TopSection aspect="aspect-[5760/3200]" />
            </SectionContainer>

            {/* ========= INTRO SECTION ============ */}
            <SectionContainer>
              <IntroSection />
            </SectionContainer>

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
              <PostsSection />
            </div>

            {/* ========= CONTACT SECTION ============ */}
            <div className="section">
              <ContactSection />
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

      {/* ======= LAYOUT ===== */}
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
