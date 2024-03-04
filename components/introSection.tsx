import EmailIcon from "./emailIcon"
import LinkedinIcon from "./linkedinIcon"
import ResumeIcon from "./resumeIcon"
import GithubIcon from "./githubIcon"
import MediumIcon from "./mediumIcon"
import BookLinkIcon from "./bookLinkIcon"
import TypewriterComponent from "typewriter-effect"

/** This is the string that will be typed out by the `<TypewriterComponent>`. */
const INTRO_STRING =
  "React Software Engineer specializing in optimizing web performance, enhancing accessiblility, and crafting highly readable code."

const IntroSection = () => {
  return (
    <div className="yw-bg-img flex h-[90vh] flex-col md:h-screen">
      <div className="mx-auto w-4/5 pt-4 md:w-[90%]">
        <p className="text-3xl text-[#FB70AA] md:text-5xl lg:text-7xl">
          <TypewriterComponent
            onInit={(typewriter) =>
              typewriter.typeString(INTRO_STRING).start().pauseFor(3000)
            }
            /**
             * We loop the animation after 3s because this animation starts
             * immediately when the page loads since we're using FullPage.js.
             *
             * When typing, we use a quite-fast-but-not-blinding 25ms delay
             * between each character. When deleting, it's blinding at 1ms.
             * */
            options={{ delay: 25, loop: true, deleteSpeed: 1 }}
          />
        </p>
      </div>
      {/* ========= ICON LINKS ============ */}
      <div className="mx-auto mt-auto w-4/5 pt-4 md:w-[90%] lg:mb-8">
        <div className="w-3/4 md:w-11/12 lg:w-3/5">
          <div className="flex justify-around py-6 md:mx-auto lg:justify-between">
            <a
              className="text-lg text-[#F38B57] md:mr-4 md:flex lg:text-xl"
              href="mailto:derekraustin@gmail.com"
            >
              <EmailIcon fill="#F38B57" />
              <span className="restoramedium ml-2 hidden pt-1 md:block">
                Email
              </span>
            </a>
            <a
              className="text-lg text-[#F38B57] md:mr-4 md:flex lg:text-xl"
              href="https://www.linkedin.com/in/derek-austin/"
              target="_blank"
            >
              <LinkedinIcon fill="#F38B57" />
              <span className="restoramedium ml-2 hidden pt-1 md:block">
                Linkedin
              </span>
            </a>
            <a
              href="#"
              className="text-lg  text-[#F38B57] md:mr-4 md:flex lg:text-xl"
            >
              <ResumeIcon fill="#F38B57" />
              <span className="restoramedium ml-2 hidden pt-1 md:block">
                Resume
              </span>
            </a>
            <a
              href="https://github.com/DoctorDerek"
              className="text-lg text-[#F38B57] md:mr-4 md:flex lg:text-xl"
              target="_blank"
            >
              <GithubIcon fill="#F38B57" />
              <span className="restoramedium ml-2 hidden pt-1 md:block">
                Github
              </span>
            </a>
            <a
              href="https://doctorderek.medium.com/"
              className="text-lg text-[#F38B57] md:mr-4 md:flex lg:text-xl"
              target="_blank"
            >
              <MediumIcon fill="#F38B57" />
              <span className="restoramedium ml-2 hidden pt-1 md:block">
                Medium
              </span>
            </a>
            <a
              className="lg:xl text-lg text-[#F38B57] md:flex"
              href="https://www.amazon.com/dp/B0BRJDLJ43"
              target="_blank"
            >
              <BookLinkIcon fill="#F38B57" />
              <span className="restoramedium ml-2 hidden pt-1 md:block">
                Book
              </span>
            </a>
          </div>
          <div className="mt-4 border-t-2 border-[#d6bb61] md:w-5/12 lg:mt-8 lg:w-1/3" />
        </div>
      </div>

      {/* ========= CLIENTS & LOGOs ============ */}
      <div className="mx-auto mb-10  mt-2 w-4/5 md:w-[90%]">
        <p className="pb-3 pt-3 text-2xl font-extralight text-[#998F8F] lg:mb-8 lg:text-3xl">
          Clients
        </p>
        <div className="flex w-full justify-between">
          <p className="w-1/4 text-4xl font-medium text-[#998F8F]">Logo</p>
          <p className="w-1/4 text-4xl font-medium text-[#998F8F]">Logo</p>
          <p className="w-1/4 text-4xl font-medium text-[#998F8F]">Logo</p>
        </div>
      </div>
    </div>
  )
}

export default IntroSection
