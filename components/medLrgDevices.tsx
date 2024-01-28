import ReactFullpage from "@fullpage/react-fullpage"
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import IntroSection from "@/components/introSection"
import AboutSection from "@/components/aboutSection"
import WorkExperienceSection from "@/components/workExperienceSection"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/testimonials"
import BlogSection from "@/components/blogSection"
import ContactSection from "@/components/contactSection"
import TopSection from "@/components/topSection"

/* Displays sections based on medium or large screen size */
export default function MedLrgDevices({
  aspect,
}: {
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
            <div className="section h-screen bg-[#FFE366]">
              <TopSection aspect="aspect-[5760/3200]" />
            </div>

            {/* ========= INTRO SECTION ============ */}
            <div className="section intro flex h-screen flex-col bg-[#FFE366] md:flex-row">
              <IntroSection />
            </div>

            {/*========= ABOUT SECTION ========= */}
            <div className="section flex h-screen flex-col bg-[#b9e3ff] md:flex-row">
              <AboutSection />
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
