import Image from "next/image"

const BlogSection = () => {
    return (
        <div className="h-screen">
        <div className="h-5/6 flex flex-col">
          <div className="w-4/5 mx-auto pt-6">
            <h2 className="text-7xl">Blog</h2>
            <p className="pt-6 text-2xl font-base leading-8">
              In addition to being a knowledgeable and experienced
              developer, Derek is an avid writer who has been
              contributing his thoughts to the industry since 2019.
            </p>
          </div>

          <div className="w-4/5 mx-auto mt-6">
            <div className="w-1/3">
              {/* p element needs to be changed to a hyperlink */}
              <p className="text-center py-4 px-1 text-lg font-medium bg-[#FFE366] rounded-tr-2xl">
                View All Posts
              </p>
            </div>

            <div className="mt-3">
              <p className="text-lg">6k followers on Medium</p>
            </div>

            {/* ========== SIGN UP =========== */}
            <div className="py-6 rounded-tl-2xl">
              <div className="">
                <div className="border-t-2 border-[#cd7656] mt-2 mb-7 w-4/5"></div>
                <h3 className="text-xl pb-3">
                  Join over 160 email subscribers
                </h3>
                <form className="flex">
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    required
                    className="w-9/12 min-w-0 appearance-none border-0 px-3 py-1.5 text-base bg-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-slate-400 placeholder:text-lg focus:ring-2 focus:ring-inset sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                    placeholder="Your email address"
                  />
                  <div className="w-1/4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-tr-md px-3 py-6 text-sm font-semibold text-[#FFE366] shadow-sm bg-[#311B4D]"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* ========== READ POSTS ARROW =========== */}
            <div className="mt-5 text-white">
              <div className="flex py-2">
                <p className="text-4xl">&darr;</p>
                {/* change to hyperlink */}
                <h4 className="ml-2 text-lg my-auto">Read posts</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BlogSection