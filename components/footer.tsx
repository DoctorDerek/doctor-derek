import EmailIcon from "./emailIcon"
import LinkedinIcon from "./linkedinIcon"
import ResumeIcon from "./resumeIcon"
import GithubIcon from "./githubIcon"
import MediumIcon from "./mediumIcon"
import BookLinkIcon from "./bookLinkIcon"

export default function Footer() {
  return (
    <footer className="mt-auto md:w-full" aria-labelledby="footer-heading">
      <div className="mx-auto lg:px-8 lg:pt-32">
        <div className="bg-[#311B4D]">
          {/* ======= SIGN UP ========== */}
          <div className="rounded-tl-[3rem] bg-[#FB70AA] py-6 md:w-4/5 md:ml-auto md:px-4">
            <div className="mx-auto w-11/12">
              <h3 className="pb-2 text-xl">Join over 160 email subscribers</h3>
              <form className="flex">
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-9/12 appearance-none border-0 bg-white px-3 py-1.5 text-base shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-lg placeholder:text-slate-400 focus:ring-2 focus:ring-inset sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  placeholder="Your email address"
                />
                <div className="w-1/4">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-tr-md bg-[#311B4D] px-3 py-6 text-md font-semibold text-[#FFE366] shadow-sm"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* ======= FOOTER LINKS ========== */}
          <div className="bg-[#FB70AA] md:flex md:items-center md:justify-between lg:mt-24">
            <div className="flex justify-around bg-[#FFE366] py-4 md:grid grid-rows-3 grid-cols-2 md:w-full md:gap-y-3  md:gap-x-1 md:jusitify-center">
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
    </footer>
  )
}
