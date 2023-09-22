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
      projectTitle: "2nd Slide",
      details:
        "Duis aute irure dolor in reprehenderit in volputate velit esse cillum dolore eu fugasdiate nulla pariateur. Excepteur sint occaecat cupidtat non proident, sunt in culpa qui offcia deserunt.",
      tech: ["Lorem", "Ipsum", "Dolor", "Amet"],
    },
  ]

  return (
    <div className="h-screen">
      <div className="py-4">
        <div className="mx-auto w-4/5">
          <div className="text-center">
            <h2 className="text-7xl">Portfolio</h2>
          </div>
        </div>
      </div>
      {/* ========= SLIDER ======= */}
      <div
        ref={sliderRef}
        className="keen-slider hover:cursor-grab sm:h-80 md:h-112 lg:h-112 xl:h-128"
      >
        {/* ======= PROJECT SLIDE ======= */}
        {portfolioWork.map(
          (item: { projectTitle: string; details: string; tech: string[] }) => {
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
  )
}

export default Portfolio
