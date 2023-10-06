import IconLinks from "./iconLinks"
import EmailIcon from "./emailIcon"
import LinkedinIcon from "./linkedinIcon"
import ResumeIcon from "./resumeIcon"
import GithubIcon from "./githubIcon"
import MediumIcon from "./mediumIcon"
import BookLinkIcon from "./bookLinkIcon"

export default function Footer() {
  return (
    <footer className="mt-auto" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
        <div className="bg-[#311B4D]">
          {/* ======= SIGN UP ========== */}
          <div className="rounded-tl-2xl bg-[#FB70AA] py-6 xl:mt-0">
            <div className="mx-auto w-11/12">
              <h3 className="pb-2 text-xl">Join over 160 email subscribers</h3>
              <form className="flex">
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-9/12 min-w-0 appearance-none border-0 bg-white px-3 py-1.5 text-base shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-lg placeholder:text-slate-400 focus:ring-2 focus:ring-inset sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  placeholder="Your email address"
                />
                <div className="w-1/4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-tr-md bg-[#311B4D] px-3 py-6 text-sm font-semibold text-[#FFE366] shadow-sm"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* ======= FOOTER LINKS ========== */}
          <div className="bg-[#FB70AA] sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
            <div className="flex justify-around bg-[#FFE366] py-4">
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
