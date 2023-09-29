import React, { useState, Fragment } from "react"
import { useKeenSlider } from "keen-slider/react"

const Portfolio = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
  })

  /** ITEM IN THE ARRAY IS EACH SLIDE IN THE SLIDER */
  const portfolioWork = [
    {
      projectTitle: "Project Title Lorem Ipsum Dolor Sit Amet",
      details:
        "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
      tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    },
    {
      projectTitle: "2nd item",
      details:
        "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
      tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    },
    {
      projectTitle: "3rd item",
      details:
        "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
      tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    },
    {
      projectTitle: "4th item",
      details:
        "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
      tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    },
    {
      projectTitle: "5th item",
      details:
        "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
      tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    },
    {
      projectTitle: "6th item",
      details:
        "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
      tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    },
  ]

  return (
    <div className="h-screen">
      <div className="py-4 md:h-[15vh]">
        <div className="mx-auto w-4/5 text-center">
          <h2 className="text-7xl">Portfolio</h2>
        </div>
      </div>
      {/* ========= SLIDER ======= */}
      <div className="md:hidden">
        <div ref={sliderRef} className="keen-slider hover:cursor-grab">
          {/* ======= PROJECT SLIDE ======= */}
          {portfolioWork.map(
            (item: {
              projectTitle: string
              details: string
              tech: string[]
            }) => {
              return (
                <div
                  key={item.projectTitle}
                  className="keen-slider__slide grid transform-gpu grid-cols-1 space-x-0.5 sm:space-x-1 md:space-x-1.5 xl:space-x-2"
                >
                  <div className="">
                    <div className="mx-auto">
                      {/* white space used as a placeholder for project image */}
                      <div className="mx-auto mb-1 h-[30vh] w-11/12 rounded-tr-3xl bg-white"></div>
                      <div className="mx-auto w-11/12 bg-[#89CFFD] pb-4 pl-3 pr-3 pt-2">
                        <h3 className="mb-2 text-3xl">{item.projectTitle}</h3>
                        <p className="text-xl">{item.details}</p>
                        <div className="mt-3 flex gap-x-2">
                          {item.tech.map((paragraph: string) => (
                            <p
                              key={`${paragraph}${item.projectTitle}`}
                              className="mb-2 rounded-tr-xl bg-[#FFE366] py-1 pl-2 pr-2 text-xl"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            },
          )}
        </div>
      </div>

      <div className="hidden md:mx-auto md:block md:h-[85vh] md:w-11/12">
        <div className="md:flex justify-between bg-[#89cffd] md:h-1/4 rounded-tr-3xl">
          <div className="md:w-1/4">
            <h3>Project Title Lorem Ipsum Dolor Sit Amet</h3>
          </div>
          <div className="md:w-[45%]">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugasdiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
          </div>
          <div className="md:flex md:w-1/4 md:flex-wrap">
            <p className="bg-[#FFE366] rounded-tr-xl pl-2 pr-2 py-1 self-start md:ml-auto">Lorem</p>
            <p className="bg-[#FFE366] rounded-tr-xl pl-2 pr-2 py-1 self-start">Lorem</p>
            <p className="bg-[#FFE366] rounded-tr-xl pl-2 pr-2 py-1 self-start">Lorem</p>
            <p className="bg-[#FFE366] rounded-tr-xl pl-2 pr-2 py-1 self-start">Lorem</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
