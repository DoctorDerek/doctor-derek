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
  ]

  return (
    <div className="h-screen pink-bg-img">
      <div className="py-4 md:h-[15vh]">
        <div className="mx-auto w-4/5 text-center">
          <h2 className="text-7xl lg:text-9xl">Portfolio</h2>
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

      {/* DISPLAYS PORTFOLIO WORK ON MEDIUM AND LARGE DEVICES */}      
      <div className="hidden md:mx-auto md:block md:h-[85vh] md:w-full">
        {portfolioWork.map((item: {
          projectTitle: string,
          details: string,
          tech: string[]
        }) => {
          return (
        <div key={`portfolio-work${item.projectTitle}`} className="md:flex hover:bg-[#B9E3FF] justify-around items-center bg-[#89cffd] md:h-1/6 rounded-tr-3xl px-2 mb-1">
          <div className="md:w-[15%] border-2 border-red-500">
            <h3 className="restorabold text-xl lg:text-2xl">{item.projectTitle}</h3>
          </div>
          <div className="md:w-[45%] lg:w-1/3">
            <p className="lg:text-lg">{item.details}</p>
          </div>
          <div className="border-2 border-black flex flex-end flex-wrap md:gap-x-1.5 md:w-1/4 lg:justify-center">
            {item.tech.map((str: string, index: number) => {
              return <p key={`${item.projectTitle + str + index}`} className="bg-[#FFE366] rounded-tr-xl pl-2 pr-2 py-1 mb-2 lg:mb-0 lg:text-lg">{str}</p>
            })}
          </div>
        </div>            
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio
