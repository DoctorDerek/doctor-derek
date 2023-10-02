import React, { Fragment } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const WorkExperienceSection = () => {
  const [sliderRef, slider] = useKeenSlider({ loop: true })

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
  /* DISPLAYS WORK EXPERIENCE FOR LARGE BREAKPOINTS */
  const combinedLists = workExperienceList.firstSlide.concat(
    workExperienceList.secondSlide,
    workExperienceList.thirdSlide,
    workExperienceList.fourthSlide,
  )
  /* NUMBER OF ITEMS IN combinedLists DIVIDED 2 USED TO FILL SPACE */
  const getHalfNum = Math.floor(combinedLists.length / 2)
  //ITEMS IN GRID USED FOR LAYOUT
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
      {/* ========= SLIDER ======= */}
      <div className="ml-auto w-[95%] lg:hidden">
        <div ref={sliderRef} className="keen-slider hover:cursor-grab">
          {/* ========= FIRST SLIDE ============ */}
          <div className="keen-slider__slide grid transform-gpu grid-cols-1 space-x-0.5 sm:space-x-1 md:space-x-1.5">
            <div>
              <div className="">
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
                          <li className="restorabold ml-2 border-l-4 border-[#F38B57] py-1 pl-5 text-lg text-[#311B4D]">
                            <p className="restorabold text-lg">
                              {item.position}
                            </p>
                          </li>
                          <li
                            className={`restorabold ml-2 border-l-4 border-[#F38B57] pb-3 pl-5 text-[#311B4D] ${
                              index === workExperienceList.firstSlide.length - 1
                                ? "border-b-4"
                                : ""
                            }`}
                          >
                            <p className="restorabold text-lg">
                              {item.company}
                            </p>
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
                          <li className="restorabold ml-2 border-l-4 border-[#F38B57] py-1 pl-5 text-lg text-[#311B4D]">
                            <p className="restorabold text-lg">
                              {item.position}
                            </p>{" "}
                          </li>
                          <li
                            className={`restorabold ml-2 border-l-4 border-[#F38B57] pb-3 pl-5 text-[#311B4D] ${
                              index ===
                              workExperienceList.secondSlide.length - 1
                                ? "border-b-4"
                                : ""
                            }`}
                          >
                            <p className="restorabold text-lg">
                              {item.company}
                            </p>
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
                            <p className="restorabold text-lg">
                              {item.position}
                            </p>
                          </li>
                          <li
                            className={`ml-2 border-l-4 border-[#F38B57] pb-3 pl-5 text-[#311B4D] ${
                              index ===
                              workExperienceList.secondSlide.length - 1
                                ? "border-b-4"
                                : ""
                            }`}
                          >
                            <p className="restorabold text-lg">
                              {item.company}
                            </p>
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
                  <li className="code-icon text-[#997f59]">
                    09/2019 - 11/2019
                  </li>
                  <li className="restorabold ml-2 border-l-4 border-[#F38B57] py-1 pl-5 text-lg text-[#311B4D]">
                    <p className="restorabold text-lg">
                      Front-End Developer (React)
                    </p>
                  </li>
                  <li className="restorabold ml-2 border-l-4 border-[#F38B57] py-1 pl-5 text-lg text-[#311B4D]">
                    <p className="restorabold text-lg">
                      Brookbush Institute of Human Movement Science
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= DISPLAYS WORK EXPERIENCE ON LARGE DEVICES ======= */}
      <section className="mx-auto hidden lg:block lg:h-[65%] lg:w-11/12">
        <div className="h-full w-3/4 lg:relative">
          <ul className="work-exp-grid absolute -top-[25%] right-0 mx-auto grid h-[70vh] w-[60%] border-2 border-red-500">
            {combinedLists.map(
              (
                item: {
                  duration: string
                  position: string
                  company: string
                },
                index: number,
              ) => {
                return (
                  <li className="border-l-4 border-b-4 border-[#F38B57] py-1 pl-5 text-lg" key={item.company}>
                    <p className="restorabold text-lg">{item.duration}</p>
                    <p className="restorabold text-lg">{item.position}</p>
                    <p className={`${item.company.includes('placeholder') ? 'invisible' : ''} restorabold text-lg`}>{item.company}</p>
                  </li>
                )
              },
            )}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default WorkExperienceSection
