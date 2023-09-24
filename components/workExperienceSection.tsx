import React, { useEffect, useState, useRef, Fragment } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const WorkExperienceSection = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    // duration: 3000, // animation duration in ms
    // dragStart: () => {
    //   setPause(true)
    // },
    // dragEnd: () => {
    //   setPause(false)
    // },
  })

  /* DATA FOR WORK EXPERIENCE SLIDER */
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

  return (
    <div className="h-screen">
      <div className="rounded-bl-3xl bg-[#89CFFD] px-2 py-2">
        <div className="mx-auto w-4/5">
          <div className="text-right">
            <h2 className="text-7xl">Work</h2>
            <h2 className="text-7xl">Experience</h2>
          </div>
        </div>
      </div>
      <div className="mx-auto w-5/6">
        {/* ========= SLIDER ======= */}
        <div
          ref={sliderRef}
          className="keen-slider hover:cursor-grab sm:h-80 md:h-112 lg:h-112 xl:h-128"
        >
          {/* ========= FIRST SLIDE ============ */}
          <div className="keen-slider__slide grid transform-gpu grid-cols-1 space-x-0.5 sm:space-x-1 md:space-x-1.5 xl:space-x-2">
            <div className="">
              <div className="mx-auto">
                <ul className="work-exp mt-7 rounded-bl-2xl">
                  {workExperienceList.firstSlide.map(
                    (
                      item: {
                        duration: string
                        /**
                         * duration: timespan within the position
                         */
                        position: string
                        /**
                         * position: position worked in the company
                         */
                        company: string
                        /**
                         * company: name of the company
                         */
                      },
                      index: number,
                      /**
                       * index: used to check if the item is the last item in the array to add CSS styles
                       */
                    ) => {
                      return (
                        <Fragment key={item.position}>
                          <li className="code-icon text-[#997f59]">
                            {item.duration}
                          </li>
                          <li className="ml-2 border-l-4 border-[#F38B57] py-1 pl-5 text-lg text-[#311B4D]">
                            {item.position}
                          </li>
                          <li
                            className={`ml-2 border-l-4 border-[#F38B57] pb-3 pl-5 text-[#311B4D] ${
                              index === workExperienceList.firstSlide.length - 1
                                ? "border-b-4"
                                : ""
                            }`}
                          >
                            {item.company}
                          </li>
                        </Fragment>
                      )
                    },
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/* ========= SECOND SLIDE ============ */}
          <div className="keen-slider__slide grid transform-gpu grid-cols-1 space-x-0.5 sm:space-x-1 md:space-x-1.5 xl:space-x-2">
            <div className="">
              <div className="mx-auto">
                <ul className="work-exp mt-7 rounded-bl-2xl">
                  {workExperienceList.secondSlide.map(
                    (
                      item: {
                        duration: string
                        position: string
                        company: string
                      },
                      index: number,
                    ) => {
                      return (
                        <Fragment key={item.position}>
                          <li className="code-icon text-[#997f59]">
                            {item.duration}
                          </li>
                          <li className="ml-2 border-l-4 border-[#F38B57] py-1 pl-5 text-lg text-[#311B4D]">
                            {item.position}
                          </li>
                          <li
                            className={`ml-2 border-l-4 border-[#F38B57] pb-3 pl-5 text-[#311B4D] ${
                              index ===
                              workExperienceList.secondSlide.length - 1
                                ? "border-b-4"
                                : ""
                            }`}
                          >
                            {item.company}
                          </li>
                        </Fragment>
                      )
                    },
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/* ========= THIRD SLIDE ============ */}
          <div className="keen-slider__slide grid transform-gpu grid-cols-1 space-x-0.5 sm:space-x-1 md:space-x-1.5 xl:space-x-2">
            <div className="">
              <div className="mx-auto">
                <ul className="work-exp mt-7 rounded-bl-2xl">
                  {workExperienceList.thirdSlide.map(
                    (
                      item: {
                        duration: string
                        position: string
                        company: string
                      },
                      index: number,
                    ) => {
                      return (
                        <Fragment key={item.position}>
                          <li className="code-icon text-[#997f59]">
                            {item.duration}
                          </li>
                          <li className="ml-2 border-l-4 border-[#F38B57] py-1 pl-5 text-lg text-[#311B4D]">
                            {item.position}
                          </li>
                          <li
                            className={`ml-2 border-l-4 border-[#F38B57] pb-3 pl-5 text-[#311B4D] ${
                              index ===
                              workExperienceList.secondSlide.length - 1
                                ? "border-b-4"
                                : ""
                            }`}
                          >
                            {item.company}
                          </li>
                        </Fragment>
                      )
                    },
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/* ========= FOURTH SLIDE ============ */}
          <div className="keen-slider__slide grid transform-gpu grid-cols-1 space-x-0.5 sm:space-x-1 md:space-x-1.5 xl:space-x-2">
            <div className="">
              <div className="mx-auto">
                <ul className="work-exp mt-7 rounded-bl-2xl">
                  {workExperienceList.fourthSlide.map(
                    (
                      item: {
                        duration: string
                        position: string
                        company: string
                      },
                      index: number,
                    ) => {
                      return (
                        <Fragment key={item.position}>
                          <li className="code-icon text-[#997f59]">
                            {item.duration}
                          </li>
                          <li className="ml-2 border-l-4 border-[#F38B57] py-1 pl-5 text-lg text-[#311B4D]">
                            {item.position}
                          </li>
                          <li
                            className={`ml-2 border-l-4 border-[#F38B57] pb-3 pl-5 text-[#311B4D] ${
                              index ===
                              workExperienceList.secondSlide.length - 1
                                ? "border-b-4"
                                : ""
                            }`}
                          >
                            {item.company}
                          </li>
                        </Fragment>
                      )
                    },
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperienceSection
