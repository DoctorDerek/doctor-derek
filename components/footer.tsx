import IconLinks from "./iconLinks"

export default function Footer() {
  return (
    <footer className="pb-2 h-[40vh]" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        <div className="bg-[#311B4D]">
          {/* ======= SIGN UP ========== */}
          <div className="py-6 xl:mt-0 rounded-tl-2xl bg-[#FB70AA]">
            <div className="w-11/12 mx-auto">
              <h3 className="text-xl pb-2">Join over 160 email subscribers</h3>
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
          {/* ======= FOOTER LINKS ========== */}
          <div className="bg-[#FB70AA] sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
            <div className="bg-[#FFE366]">
              <IconLinks flexSpacing={"justify-around"} fill={"#F38B57"} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
