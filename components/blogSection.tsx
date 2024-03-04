import Image from "next/image"
import clock from "@/images/clock.png"
import { useKeenSlider } from "keen-slider/react"

const BlogSection = () => {
  /* Slider styling and options */
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      spacing: 0,
    },
    breakpoints: {
      "(min-width: 1040px)": {
        slides: { perView: 3 },
      },
    },
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
    {
      header: "Typescript",
      title: "4th slide",
      details:
        "Exploring the power of built-in utility types for safer code — TypeScript has introduced a variety of utility types, designed to help transform and manipulate ty...",
      time: "6 min read | May 21, 2023",
    },
  ]

  return (
    <div className="org-bg-img h-screen">
      <div className="h-full md:flex md:pt-20 lg:pt-0 ">
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
              <a
                href="#"
                target="_blank"
                className="block rounded-tr-2xl bg-[#FFE366] px-1 py-4 text-center text-lg font-medium"
              >
                View All Posts
              </a>
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
        <div className="hidden h-full md:block md:w-1/2 md:pl-4 lg:flex lg:w-2/3 lg:flex-col">
          <div className="mt-4 w-[95%] lg:mb-auto lg:mt-auto lg:w-4/5">
            <div className="lg:my-auto">
              <div ref={sliderRef} className="keen-slider hover:cursor-grab">
                {/* ========== Article posts ========== */}
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
                        <div className="">
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
                                  className="w-full lg:h-[30vh]"
                                />
                                <p className="absolute -bottom-4 w-11/12 rounded-tr-xl bg-[#FB70AA] py-2 pl-3 pr-3 text-lg text-white">
                                  {article.title}
                                </p>
                              </div>
                              <div className="w-11/12 bg-[#b9e3ff] pb-4 pl-4 pt-8">
                                <p className="lg:text-xl">{article.details}</p>
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
      </div>
    </div>
  )
}

export default BlogSection
