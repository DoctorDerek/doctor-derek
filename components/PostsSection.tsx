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
                  <div key={article.title} className="keen-slider__slide">
                    <div className="ml-2">
                      <div className="">
                        <div
                          key={article.header}
                          className="mt-20 h-full w-11/12"
                        >
                          <div className="relative w-11/12">
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
                          <div className="w-11/12 bg-[#b9e3ff] pb-4 pl-4 pt-8">
                            <p className="text-xl">{article.details}</p>
                            <p className="mt-4 text-[#747fa6]">
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
