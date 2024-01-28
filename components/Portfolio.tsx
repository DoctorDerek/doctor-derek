import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import Modal from "./modal"

/** Item in the array is each slide in the slider */
const projects = [
  {
    projectTitle: "Project Title Lorem Ipsum Dolor Sit Amet",
    details:
      "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
    tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    isClicked: false,
  },
  {
    projectTitle: "2nd item",
    details:
      "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
    tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    isClicked: false,
  },
  {
    projectTitle: "3rd item",
    details:
      "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
    tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    isClicked: false,
  },
  {
    projectTitle: "4th item",
    details:
      "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
    tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    isClicked: false,
  },
  {
    projectTitle: "5th item",
    details:
      "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
    tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    isClicked: false,
  },
  {
    projectTitle: "6th item",
    details:
      "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
    tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    isClicked: false,
  },
]

const Portfolio = () => {
  const [portfolioWork, setPortfolioWork] = useState<
    {
      /**
       * title: string value of the project name
       */
      projectTitle: string
      /**
       * details: string value, describing the project
       */
      details: string
      /**
       * tech: array of strings of technologies used
       */
      tech: string[]
      /**
       * isClicked: boolean value to display the project that was clicked
       */
      isClicked: Boolean
    }[]
  >(projects)
  const [showModal, setShowModal] = useState<Boolean>(false)
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
  })

  /** Opens and closes modal */
  const handleModal = (
    /**
     * projectName: string value of the project name
     */
    projectName: string,
  ) => {
    setShowModal(true)
    /* Updates the hook and displays the object that is set truthy */
    const selectProject = portfolioWork.map((item) => {
      if (item.projectTitle === projectName) {
        return { ...item, isClicked: true }
      }
      return { ...item, isClicked: false }
    })
    setPortfolioWork(selectProject)
  }

  return (
    <div className="pink-bg-img h-screen">
      <div className="py-4 md:h-[15vh]">
        <div className="mx-auto w-4/5 text-center">
          <h2 className="text-7xl lg:text-9xl">Portfolio</h2>
        </div>
      </div>
      {/* ========= Slider, displays only on small devices ======= */}
      <div className="md:hidden">
        <div ref={sliderRef} className="keen-slider hover:cursor-grab">
          {portfolioWork.map((item) => {
            return (
              <div
                key={item.projectTitle}
                className="keen-slider__slide mx-auto grid transform-gpu grid-cols-1 space-x-0.5 sm:space-x-1"
              >
                <div className="mx-auto">
                  <div>
                    {/* white space used as a placeholder for project image */}
                    <div className="mx-auto mb-1 h-[30vh] w-11/12 rounded-tr-3xl bg-white"></div>
                    <div className="mx-auto w-11/12 bg-[#89CFFD] pb-4 pl-3 pr-3 pt-2">
                      <h3 className="mb-2 text-3xl">{item.projectTitle}</h3>
                      <p className="text-xl">{item.details}</p>
                      <div className="mt-3 flex gap-x-2">
                        {item.tech.map(
                          (
                            /**
                             * paragraph: string value used to create unique React keys and to display technology stack used
                             */
                            paragraph: string,
                          ) => (
                            <p
                              key={`${paragraph}${item.projectTitle}`}
                              className="mb-2 rounded-tr-xl bg-[#FFE366] py-1 pl-2 pr-2 text-xl"
                            >
                              {paragraph}
                            </p>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Displays portfolio work on medium and large devices */}
      <div className="hidden gap-y-1 md:mx-auto md:flex md:h-[85vh] md:w-full md:flex-col">
        {portfolioWork.map((item) => {
          return (
            <div
              key={`portfolio-work${item.projectTitle}`}
              onClick={() => handleModal(item.projectTitle)}
              className="h-1/6 items-center justify-around rounded-tr-3xl bg-[#89cffd] px-2 hover:cursor-pointer hover:bg-[#B9E3FF] md:flex md:shrink"
            >
              <div className="md:w-[15%]">
                <h3 className="restorabold text-lg lg:text-2xl">
                  {item.projectTitle}
                </h3>
              </div>
              <div className="md:w-[45%] lg:w-1/3">
                <p className="lg:text-lg">{item.details}</p>
              </div>
              <div className="flex-end flex flex-wrap md:w-1/4 md:gap-x-1.5 lg:justify-center">
                {item.tech.map(
                  (
                    /**
                     * str: string value of technologies used
                     */
                    str: string,
                    /**
                     * index: number value used with str and projectTitle to create unique React keys
                     */
                    index: number,
                  ) => {
                    return (
                      <p
                        key={`${item.projectTitle + str + index}`}
                        className="mb-2 rounded-tr-xl bg-[#FFE366] py-1 pl-2 pr-2 lg:mb-0 lg:text-lg"
                      >
                        {str}
                      </p>
                    )
                  },
                )}
              </div>
            </div>
          )
        })}
      </div>
      {/* ======= Modal window component ======== */}
      <Modal
        portfolioWork={portfolioWork}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  )
}

export default Portfolio
