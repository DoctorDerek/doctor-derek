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
import { useState } from "react"

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
  M0_Intro_Animation,
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
            {sections.map((section) => (
              <div className="section" key={section.src}>
                <Image
                  src={section}
                  alt={section.src}
                  className={classNames(
                    // We use "bg-yellow" to fill in the background (sides)
                    "absolute top-0 h-[100dvh] w-full bg-[#FFE366] object-contain",
                    aspect
                  )}
                  placeholder="blur"
                />
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}

function useWindowWidth() {
  const [width, setWidth] = useState(1400) // We assume desktop for SSR
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
  }
  return { width }
}

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
      <DisplaySections sections={MobileSections} aspect="aspect-[1500/2668]" />
    </>
  )
}
