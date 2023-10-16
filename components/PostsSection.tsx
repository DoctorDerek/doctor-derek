import Image from "next/image"
import clock from "@/images/clock.png"
import { useKeenSlider } from "keen-slider/react"

const PostsSection = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
  })

  const articlePosts = [
    {
      header: "Typescript",
      title: "How to use Readonly in Typescript",
      details:
        "Exploring the power of built-in utility types for safer code — TypeScript has introduced a variety of utility types, designed to help transform and manipulate ty...",
      time: "6 min read | May 21, 202",
    },
    {
      header: "Typescript",
      title: "2nd slide",
      details:
        "Exploring the power of built-in utility types for safer code — TypeScript has introduced a variety of utility types, designed to help transform and manipulate ty...",
      time: "6 min read | May 21, 202",
    },
    {
      header: "Typescript",
      title: "3rd slide",
      details:
        "Exploring the power of built-in utility types for safer code — TypeScript has introduced a variety of utility types, designed to help transform and manipulate ty...",
      time: "6 min read | May 21, 2023",
    },
  ]

  return (
    <div className="h-screen">
      <div className="flex h-full flex-col">
        <div className="mx-auto h-4/5 w-[95%]">
          <div ref={sliderRef} className="keen-slider hover:cursor-grab">
            {articlePosts.map(
              (article: {
                /**
                 * header: string value, subject of the article in yellow
                 */
                header: string
                /**
                 * title: string value name of the article in pink and used to create unique React keys
                 */
                title: string
                /**
                 * details: string value, preview of the article in blue
                 */
                details: string
                /**
                 * time: string value, date of the post & estimated time to read the entire article
                 */
                time: string
              }) => {
                return (
                  <div
                    key={article.title}
                    className="keen-slider__slide"
                  >
                    <div className="ml-2">
                      <div className="">
                        <div
                          key={article.header}
                          className="h-full w-11/12 mt-20"
                        >
                          <div className="w-11/12 relative">
                            <p className="absolute -top-3 left-4 rounded-tr-xl bg-[#FFE366] py-1 pl-3 pr-3 text-2xl">
                              {article.header}
                            </p>
                            {/* ====== POST IMAGE ====== */}
                            <Image
                              src={clock}
                              alt="How to user Readonly in Typescript"
                              className="h-[40vh] w-full"
                            />
                            <p className="absolute -bottom-4 w-11/12 rounded-tr-xl bg-[#FB70AA] py-2 pl-3 pr-3 text-lg text-white">
                              {article.title}
                            </p>
                          </div>
                          <div className="w-11/12 bg-[#b9e3ff] pb-4 pt-8 pl-4">
                            <p className="text-xl">
                              {article.details}
                            </p>
                            <p className="text-[#747fa6] mt-4">
                              {article.time}
                            </p>
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
      </div>
    </div>
  )
}

export default PostsSection

/* 
<div ref={sliderRef} className="keen-slider hover:cursor-grab">
<div
                key={item.projectTitle}
                className="keen-slider__slide mx-auto grid transform-gpu grid-cols-1 space-x-0.5 sm:space-x-1"
              >
                <div className="mx-auto">
                <div className="">
                  
                    <div className="mb-1 h-[30vh] w-11/12 rounded-tr-3xl bg-white"></div>
                    <div className="w-11/12 bg-[#89CFFD] pb-4 pl-3 pr-3 pt-2">
                      <h3 className="mb-2 text-3xl">{item.projectTitle}</h3>
                      <p className="text-xl">{item.details}</p>
                      <div className="mt-3 flex gap-x-2"></div>


      <div className="ml-auto w-[95%] border-black border-2 lg:hidden">
        <div ref={sliderRef} className="keen-slider hover:cursor-grab">

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
        </div>
      </div>
*/
