import EmailIcon from "./emailIcon"
import LinkedinIcon from "./linkedinIcon"
import ResumeIcon from "./resumeIcon"
import GithubIcon from "./githubIcon"
import MediumIcon from "./mediumIcon"
import BookLinkIcon from "./bookLinkIcon"

export default function Footer() {
  return (
    <footer className="mt-auto md:w-full" aria-labelledby="footer-heading">
      <div className="mx-auto lg:pt-32 lg:w-full lg:ml-auto lg:mr-0 lg:pl-12">
        <div className="">
          {/* ======= SIGN UP ========== */}
          <div className="rounded-tl-3xl md:rounded-tl-[3.5rem] bg-[#FB70AA] py-6 md:py-8 md:pl-4 md:ml-auto md:w-4/5 lg:pb-16 lg:pt-20 lg:pl-16">
            <div className="mx-auto w-11/12">
              <h3 className="pb-3 text-xl md:pb-4 lg:text-2xl">Join over 160 email subscribers</h3>
              <form className="flex">
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-9/12 appearance-none border-0 bg-white px-3 py-1.5 text-base shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-lg placeholder:text-slate-400 focus:ring-2 focus:ring-inset sm:w-64 sm:text-sm sm:leading-6 lg:py-5 lg:pl-4 lg:w-3/5"
                  placeholder="Your email address"
                />
                <div className="w-1/4 md:w-1/3 lg:w-1/4">
                  <button
                    type="submit"
                    className="text-md flex w-full items-center justify-center rounded-tr-2xl bg-[#311B4D] px-3 py-6 shadow-sm md:py-3 lg:py-5 font-semibold text-[#FFE366] md:text-lg lg:text-xl"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* ======= FOOTER LINKS ========== */}
          <div className="bg-[#FB70AA] md:bg-transparent">
            <div className="bg-[#FFE366] rounded-tl-3xl md:rounded-tl-[3.5rem]">
              <div className="flex justify-around grid-cols-2 grid-rows-3 py-6 md:pt-8 md:grid md:gap-y-6 md:w-3/5 md:pl-8 lg:pl-14 lg:pb-16 lg:pt-14">
                <EmailIcon fill="#F38B57" />
                <LinkedinIcon fill="#F38B57" />
                <ResumeIcon fill="#F38B57" />
                <GithubIcon fill="#F38B57" />
                <MediumIcon fill="#F38B57" />
                <BookLinkIcon fill="#F38B57" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
