import React, { Fragment } from "react"
import Image from "next/image"
import codeIcon from "images/codeIcon.svg"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import EmailIcon from "./emailIcon"
import LinkedinIcon from "./linkedinIcon"
import ResumeIcon from "./resumeIcon"
import GithubIcon from "./githubIcon"
import MediumIcon from "./mediumIcon"
import BookLinkIcon from "./bookLinkIcon"

const WorkExperienceSection = () => {
  const [sliderRef, slider] = useKeenSlider({ loop: true })

  /** Data for work experience slider */
  const workExperienceList = {
    firstSlide: [
      {
        duration: "01/2023 - Present",
        position: "Senior Full-Stack Developer",
        company: "Premium",
      },
      {
        duration: "06/2001 - Present",
        position: "Front-End Developer",
        company: "Freelance",
      },
      {
        duration: "08/2019 - Present",
        position: "React Technical Writer (JavaScript)",
        company: "Medium",
      },
    ],
    secondSlide: [
      {
        duration: "09/2022 - 12/2022",
        position: "Lead Front-End Engineer",
        company: "Gemini Sports Analytics",
      },
      {
        duration: "05/2022 - 08/2022",
        position: "Developer Advocate (React)",
        company: "Propel Data Cloud",
      },
      {
        duration: "11/2021 - 05/2022",
        position: "Senior Lead Platform Architect",
        company: "Hilton",
      },
    ],
    thirdSlide: [
      {
        duration: "08/2021 - 11/2021",
        position: "Marketing Technologist (React)",
        company: "Loop",
      },
      {
        duration: "10/2020 - 03/2021",
        position: "Bootcamp Instructor (HTML)",
        company: "Nucamp Coding Bootcamp",
      },
      {
        duration: "04/2020 - 06/2020",
        position: "Developer Advocate for Volt",
        company: "Volusion",
      },
    ],
    fourthSlide: [
      {
        duration: "09/2019 - 11/2019",
        position: "Front-End Developer (React)",
        company: "Brookbush Institute of Human Movement Science",
      },
    ],
  }
  /**Displays work experience for large breakpoints */
  const combinedLists = workExperienceList.firstSlide.concat(
    workExperienceList.secondSlide,
    workExperienceList.thirdSlide,
    workExperienceList.fourthSlide,
  )
  /** Number of items in combinedLists divided 2 used to fill space */
  const getHalfNum = Math.floor(combinedLists.length / 2)
  //Items in grid used for layout
  combinedLists.splice(
    getHalfNum,
    0,
    {
      duration: " ",
      position: " ",
      company: "placeholder 1",
    },
    {
      duration: " ",
      position: " ",
      company: "placeholder 2",
    },
    {
      duration: " ",
      position: " ",
      company: "placeholder 3",
    },
    {
      duration: " ",
      position: " ",
      company: "placeholder 4",
    },
  )

  return (
    <div className="yw-bg-img h-screen">
      <div className="rounded-bl-[3rem] bg-[#89CFFD] px-2 py-6 lg:ml-auto lg:h-[30%] lg:w-[45%]">
        <div className="mx-auto w-[90%]">
          <h2 className="text-right text-7xl md:text-8xl lg:text-9xl">Work</h2>
          <h2 className="text-right text-7xl md:text-8xl lg:text-9xl">
            Experience
          </h2>
        </div>
      </div>
      {/* ========= Slider ======= */}
      <div className="ml-auto w-[95%] lg:hidden">
        <div ref={sliderRef} className="keen-slider hover:cursor-grab">
          {/* ========= First Slide ============ */}
          <div className="keen-slider__slide">
            <div>
              <div className="pl-3">
                <ul className="mt-12 pl-1">
                  {workExperienceList.firstSlide.map(
                    (
                      item: {
                        /**
                         * duration: string value of the timespan within the position and used as React keys
                         */
                        duration: string
                        /**
                         * position: string value of the position worked in the company
                         */
                        position: string
                        /**
                         * company: string value of name of the company
                         */
                        company: string
                      },
                      /**
                       * index: number value used to determine whether to add css styles
                       */
                      index: number,
                    ) => {
                      return (
                        <li
                          key={item.position}
                          className={`relative border-l-4 border-[#F38B57] pb-4 pl-4 ${
                            index === workExperienceList.firstSlide.length - 1
                              ? "rounded-bl-xl border-b-4"
                              : ""
                          }`}
                        >
                          {/* Code icon */}
                          <Image
                            src={codeIcon}
                            className="absolute -left-4 top-0 h-6 w-6 bg-[#FFE366]"
                            alt="code icon"
                          />
                          <div className="">
                            <p className="text-[#997f59]">{item.duration}</p>
                          </div>
                          <div className="py-1">
                            <p className="restorabold text-lg text-[#311B4D]">
                              {item.position}
                            </p>
                          </div>
                          <div>
                            <p className="restorabold text-lg">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      )
                    },
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/* ========= Second Slide ============ */}
          <div className="keen-slider__slide">
            <div>
              <div className="pl-4">
                <ul className="mt-7 pl-1">
                  {workExperienceList.secondSlide.map(
                    (
                      item: {
                        /**
                         * duration: string value of the timespan within the position and used as React keys
                         */
                        duration: string
                        /**
                         * position: string value of the position worked in the company
                         */
                        position: string
                        /**
                         * company: string value of name of the company
                         */
                        company: string
                      },
                      /**
                       * index: number value used to determine whether to add css styles
                       */
                      index: number,
                    ) => {
                      return (
                        <li
                          key={item.position}
                          className={`relative border-l-4 border-[#F38B57] pb-4 pl-4 ${
                            index === 2 ? "rounded-bl-xl border-b-4" : ""
                          }`}
                        >
                          {/* Code icon */}
                          <Image
                            src={codeIcon}
                            className="absolute -left-4 top-0 h-6 w-6 bg-[#FFE366]"
                            alt="code icon"
                          />
                          <div className="">
                            <p className="text-[#997f59]">{item.duration}</p>
                          </div>
                          <div className="py-1">
                            <p className="restorabold text-lg text-[#311B4D]">
                              {item.position}
                            </p>
                          </div>
                          <div>
                            <p className="restorabold text-lg">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      )
                    },
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* ========= Third Slide ============ */}
          <div className="keen-slider__slide">
            <div>
              <div className="pl-4">
                <ul className="mt-7 pl-1">
                  {workExperienceList.thirdSlide.map(
                    (
                      item: {
                        /**
                         * duration: string value of the timespan within the position and used as React keys
                         */
                        duration: string
                        /**
                         * position: string value of the position worked in the company
                         */
                        position: string
                        /**
                         * company: string value of name of the company
                         */
                        company: string
                      },
                      /**
                       * index: number value used to determine whether to add css styles
                       */
                      index: number,
                    ) => {
                      return (
                        <li
                          key={item.position}
                          className={`relative border-l-4 border-[#F38B57] pb-4 pl-4 ${
                            index === 2 ? "rounded-bl-xl border-b-4" : ""
                          }`}
                        >
                          {/* Code icon */}
                          <Image
                            src={codeIcon}
                            className="absolute -left-4 top-0 h-6 w-6 bg-[#FFE366]"
                            alt="code icon"
                          />
                          <div className="">
                            <p className="text-[#997f59]">{item.duration}</p>
                          </div>
                          <div className="py-1">
                            <p className="restorabold text-lg text-[#311B4D]">
                              {item.position}
                            </p>
                          </div>
                          <div>
                            <p className="restorabold text-lg">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      )
                    },
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* ========= Fourth Slide ============ */}
          <div className="keen-slider__slide">
            <div>
              <div className="pl-4">
                <ul className="mt-7 pl-1">
                  {workExperienceList.fourthSlide.map(
                    (
                      item: {
                        /**
                         * duration: string value of the timespan within the position and used as React keys
                         */
                        duration: string
                        /**
                         * position: string value of the position worked in the company
                         */
                        position: string
                        /**
                         * company: string value of name of the company
                         */
                        company: string
                      },
                      /**
                       * index: number value used to determine whether to add css styles
                       */
                      index: number,
                    ) => {
                      return (
                        <li
                          key={item.position}
                          className={`relative border-l-4 border-[#F38B57] pb-4 pl-4 ${
                            index === 2 ? "rounded-bl-xl border-b-4" : ""
                          }`}
                        >
                          {/* Code icon */}
                          <Image
                            src={codeIcon}
                            className="absolute -left-4 top-0 h-6 w-6 bg-[#FFE366]"
                            alt="code icon"
                          />
                          <div className="">
                            <p className="text-[#997f59]">{item.duration}</p>
                          </div>
                          <div className="py-1">
                            <p className="restorabold text-lg text-[#311B4D]">
                              {item.position}
                            </p>
                          </div>
                          <div>
                            <p className="restorabold text-lg">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      )
                    },
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Displays work experince on large devices ======= */}
      <div className="mx-auto lg:block lg:h-[65%] lg:w-11/12">
        <div className="flex h-[35vh] w-full flex-col md:h-[30vh] lg:relative lg:h-full">
          <ul className="work-exp-grid hidden h-full w-1/2 lg:absolute lg:-top-[30%] lg:left-1/4 lg:grid">
            {combinedLists.map(
              (
                item: {
                  duration: string
                  position: string
                  company: string
                },
                index: number,
              ) => {
                /* Ternary operators adds CSS borders */
                return (
                  <li
                    className={`pl-4 
                    ${
                      index === getHalfNum - 1 ||
                      index === getHalfNum - 2 ||
                      index === getHalfNum - 3
                        ? "mr-8 border-r-4"
                        : ""
                    }
                    ${index === getHalfNum - 1 && "rounded-b-3xl border-b-4"} 
                    ${
                      index < getHalfNum || index > getHalfNum + 3
                        ? "border-l-4 border-[#F38B57]"
                        : ""
                    }
                    ${index === combinedLists.length - 1 && "border-l-0"}
                    ${index === 2 && "relative"}
                    `}
                    key={`${item.duration} ${index}`}
                  >
                    <div className="relative flex flex-col">
                      {/* Hides code icon if item.company string contains placeholder */}
                      {!item.company.includes("placeholder") && (
                        <Image
                          src={codeIcon}
                          className="absolute -left-8 top-0 h-6 w-6 bg-[#FFE366]"
                          alt="code icon"
                        />
                      )}
                      <p className="restorabold text-xl">{item.duration}</p>
                      <p className="restorabold py-2 text-xl">
                        {item.position}
                      </p>
                      <p
                        className={`${
                          item.company.includes("placeholder")
                            ? "invisible"
                            : ""
                        } restorabold pb-2 text-lg`}
                      >
                        {item.company}
                      </p>
                    </div>
                    {/* Horizontal connecting line for the 3rd item in */}
                    {index === 2 && (
                      <div className="absolute -right-8 top-0 w-8 border-b-2 border-t-2 border-[#F38B57]"></div>
                    )}
                  </li>
                )
              },
            )}
          </ul>
          {/* Icons with links */}
          <div className="mb-2 ml-6 mt-auto flex w-[65%] justify-between gap-y-4 md:ml-12 md:w-[50%] lg:mb-28 lg:ml-32 lg:grid lg:w-1/5 lg:grid-cols-2 lg:grid-rows-3 lg:gap-x-6">
            <a
              className="text-[#311B4D] md:flex lg:text-xl"
              href="mailto:derekraustin@gmail.com"
            >
              <EmailIcon fill="#F38B57" />
              <span className="ml-2 hidden pt-1 lg:block">Email</span>
            </a>
            <a
              className="text-lg text-[#311B4D] md:flex lg:text-xl"
              href="https://www.linkedin.com/in/derek-austin/"
              target="_blank"
            >
              <LinkedinIcon fill="#F38B57" />
              <span className="ml-1 hidden pt-1 lg:block">Linkedin</span>
            </a>
            <a href="#" className="text-lg  text-[#311B4D] md:flex lg:text-xl">
              <ResumeIcon fill="#F38B57" />
              <span className="ml-1 hidden pt-1 lg:block">Resume</span>
            </a>
            <a
              href="https://github.com/DoctorDerek"
              className="text-lg text-[#311B4D] md:flex lg:text-xl"
              target="_blank"
            >
              <GithubIcon fill="#F38B57" />
              <span className="ml-1 hidden pt-1 lg:block">Github</span>
            </a>
            <a
              href="https://doctorderek.medium.com/"
              className="text-lg text-[#311B4D] md:flex lg:text-xl"
              target="_blank"
            >
              <MediumIcon fill="#F38B57" />
              <span className="ml-1 hidden pt-1 lg:block ">Medium</span>
            </a>
            <a
              className="text-[#311B4D] md:flex lg:text-xl"
              href="https://www.amazon.com/dp/B0BRJDLJ43"
              target="_blank"
            >
              <BookLinkIcon fill="#F38B57" />
              <span className="ml-1 hidden pt-1 lg:block">Book</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperienceSection
