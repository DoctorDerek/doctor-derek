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
      <div className="mb-16 pt-4">
        <div className="mx-auto w-[95%]">
          <div
            ref={sliderRef}
            className="keen-slider hover:cursor-grab sm:h-80 md:h-112 lg:h-112 xl:h-128"
          >
            {articlePosts.map(
              (article: {
                header: string
                /**
                 * header top part of the article in yellow
                 */
                title: string
                /**
                 * title: name of the article in pink
                 */
                details: string
                /**
                 * details: preview of the article in blue
                 */
                time: string
                /**
                 * time: text in grey, date of the post & estimated time to read the entire article
                 */
              }) => {
                return (
                  <div
                    key={article.title}
                    className="keen-slider__slide grid transform-gpu grid-cols-1 pl-4 md:space-x-1.5 xl:space-x-2"
                  >
                    <div
                      key={article.header}
                      className="mx-auto flex h-5/6 w-4/5 flex-col"
                    >
                      <div className="relative mt-8 w-3/4">
                        <p className="absolute -top-3 left-4 mb-2 rounded-tr-xl bg-[#FFE366] py-1 pl-3 pr-3 text-xl font-light">
                          {article.header}
                        </p>
                        {/* ====== POST IMAGE ====== */}
                        <Image
                          src={clock}
                          alt="How to user Readonly in Typescript"
                          style={{ objectFit: "cover" }}
                        />
                        <p className="absolute -bottom-6 w-4/5 rounded-tr-xl bg-[#FB70AA] py-2 pl-3 pr-3 text-lg text-white">
                          {article.title}
                        </p>
                      </div>
                      <div className="w-3/4 bg-[#b9e3ff]">
                        <p className="text-medium px-2 pb-2 pl-3 pt-7">
                          {article.details}
                        </p>
                        <p className="pb-2 pl-3 text-[#747fa6]">
                          {article.time}
                        </p>
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
