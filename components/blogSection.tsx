import Image from "next/image"
import clock from "@/images/clock.png"
import { useKeenSlider } from "keen-slider/react"

const BlogSection = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
  })
  /* Array of objects, each object is a article */
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
      <div className="h-full md:flex md:pt-24 lg:pt-16">
        <div className="flex h-full flex-col text-[#311B4D] md:mx-auto md:w-1/2 lg:mx-0 lg:w-1/3">
          <div className="mx-auto w-4/5 pt-2 md:w-11/12 lg:mt-auto lg:w-4/5">
            <h2 className="text-7xl lg:text-9xl">Blog</h2>
            <p className="font-base pt-6 text-2xl leading-8">
              In addition to being a knowledgeable and experienced developer,
              Derek is an avid writer who has been contributing his thoughts to
              the industry since 2019.
            </p>
          </div>

          <div className="mx-auto mt-6 w-4/5 md:w-11/12 lg:mb-auto lg:w-4/5">
            <div className="w-[40%]">
              {/* p element needs to be changed to a hyperlink */}
              <p className="rounded-tr-2xl bg-[#FFE366] px-1 py-4 text-center text-lg font-medium">
                View All Posts
              </p>
            </div>

            <div className="mt-3">
              <p className="text-lg">6k followers on Medium</p>
            </div>

            {/* ========== Sign Up =========== */}
            <div className="rounded-tl-2xl py-6">
              <div className="">
                {/* Line divider */}
                <div className="mb-7 mt-2 w-4/5 border-t-2 border-[#cd7656]"></div>
                <h3 className="pb-3 text-xl">
                  Join over 160 email subscribers
                </h3>
                <form className="flex">
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-9/12 min-w-0 appearance-none border-0 bg-white px-3 py-5 text-base placeholder:text-lg placeholder:text-slate-400 focus:ring-2 focus:ring-inset sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                    placeholder="Your email address"
                  />
                  <div className="w-1/4">
                    <button
                      type="submit"
                      className="text-md flex w-full items-center justify-center rounded-tr-md bg-[#311B4D] py-5 font-semibold text-[#FFE366]"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* ========== Read Posts with Arrow =========== */}
          <div className=" mx-auto mb-8 mt-auto w-4/5 text-white md:hidden">
            <div className="flex py-2">
              <p className="text-4xl">&darr;</p>
              {/* change to hyperlink */}
              <h4 className="my-auto ml-2 text-lg">Read posts</h4>
            </div>
          </div>
        </div>

        {/* ========== Slider =========== */}
        <div className="hidden h-full md:block md:w-1/2 lg:flex lg:w-2/3 lg:flex-col">
          <div className="mt-4 w-[95%] lg:mb-auto lg:mt-auto lg:w-1/2">
            <div className="lg:my-auto">
              <div ref={sliderRef} className="keen-slider hover:cursor-grab">
                {/* ========== Article posts ========== */}
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
                     * time: string value of date & estimated time to read the entire article
                     */
                  }) => {
                    return (
                      <article
                        key={article.title}
                        className="keen-slider__slide mx-auto"
                      >
                        <div
                          key={article.header}
                          className="mx-auto w-3/4 lg:w-1/2"
                        >
                          <div className="relative mt-8">
                            <p className="absolute -top-3 left-4 mb-2 rounded-tr-xl bg-[#FFE366] py-1 pl-3 pr-3 text-xl font-light">
                              {article.header}
                            </p>
                            {/* ====== POST IMAGE ====== */}
                            <div className="w-full">
                              <Image
                                src={clock}
                                alt="How to user Readonly in Typescript"
                                className="w-full object-cover"
                              />
                            </div>
                            <p className="absolute -bottom-6 w-4/5 rounded-tr-xl bg-[#FB70AA] py-2 pl-3 pr-3 text-lg text-white">
                              {article.title}
                            </p>
                          </div>
                          <div className="bg-[#b9e3ff]">
                            <p className="text-medium px-2 pb-2 pl-3 pt-7">
                              {article.details}
                            </p>
                            <p className="pb-2 pl-3 text-[#2b2f40]">
                              {article.time}
                            </p>
                          </div>
                        </div>
                      </article>
                    )
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSection
