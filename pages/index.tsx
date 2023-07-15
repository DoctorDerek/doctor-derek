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
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Dr. Derek Austin - Senior Frontend Developer & React Software Engineer
          - @DoctorDerek
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ReactFullpage
        credits={{ enabled: false }}
        navigation
        render={() => {
          // We don't need any of the props here, but I list them for reference
          //  render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="block md:hidden">
                {/* Mobile */}
                <div className="section">
                  <Image src={M0_Intro_Animation} alt="Intro Animation" />
                </div>
                <div className="section">
                  <Image src={M1_Intro} alt="Intro" />
                </div>
              </div>
              <div className="hidden md:block">
                {/* Desktop */}
                <div className="section">
                  <Image
                    src={D0_Intro_Animation}
                    alt="Intro Animation"
                    className="aspect-[5760/3200] h-screen object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="section">
                  <Image src={D1_Intro} alt="Intro" />
                </div>
                <div className="section">
                  <Image src={D2_About} alt="About" />
                </div>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </>
  )
}
