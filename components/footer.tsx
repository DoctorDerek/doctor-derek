import EmailIcon from "./emailIcon"
import LinkedinIcon from "./linkedinIcon"
import ResumeIcon from "./resumeIcon"
import GithubIcon from "./githubIcon"
import MediumIcon from "./mediumIcon"
import BookLinkIcon from "./bookLinkIcon"

export default function Footer() {
  return (
    <footer className="mt-auto md:w-full lg:w-11/12 lg:ml-auto" aria-labelledby="footer-heading">
      <div className="mx-auto lg:ml-auto lg:mr-0 lg:w-full lg:pl-12 lg:pt-32">
        <div className="">
          {/* ======= SIGN UP ========== */}
          <div className="rounded-tl-3xl bg-[#FB70AA] py-6 md:ml-auto md:w-4/5 md:rounded-tl-[3.5rem] md:py-8 md:pl-4 lg:py-16 lg:pl-16">
            <div className="mx-auto w-11/12">
              <h3 className="pb-3 text-xl md:text-lg md:pb-4 lg:text-xl">
                Join over 160 email subscribers
              </h3>
              <form className="flex">
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-9/12 appearance-none border-0 bg-white px-3 py-1.5 text-base shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-lg placeholder:text-slate-400 focus:ring-2 focus:ring-inset sm:w-64 sm:text-sm sm:leading-6 lg:w-3/5 lg:py-5 lg:pl-4"
                  placeholder="Your email address"
                />
                <div className="w-1/4 md:w-[40%] lg:w-1/4">
                  <button
                    type="submit"
                    className="text-md w-full rounded-tr-2xl bg-[#311B4D] px-3 py-6 font-semibold text-[#FFE366] shadow-sm md:py-4 lg:py-5 lg:text-xl"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* ======= FOOTER LINKS ========== */}
          <div className="bg-[#FB70AA] md:bg-transparent">
            <div className="rounded-tl-3xl bg-[#FFE366] md:rounded-tl-[3.5rem]">
              <div className="flex justify-around grid-cols-2 grid-rows-3 py-6 md:grid md:gap-y-2.5 md:ml-8 md:py-8 md:w-3/4 lg:w-1/2 lg:gap-y-6 lg:pb-12 lg:pl-14 lg:pt-14">
                <a className="text-lg text-[#311B4D] md:flex lg:text-xl"
                  href="mailto:derekraustin@gmail.com"
                >
                  <EmailIcon fill="#F38B57" />
                  <span className="ml-2 hidden pt-1 md:block restoramedium">Email</span>
                </a>
                <a
                  className="text-lg text-[#311B4D] md:flex lg:text-xl"
                  href="https://www.linkedin.com/in/derek-austin/"
                  target="_blank"
                >
                  <LinkedinIcon fill="#F38B57" />
                  <span className="ml-2 hidden pt-1 md:block restoramedium">Linkedin</span>
                </a>
                <a href="#" className="text-lg  text-[#311B4D] md:flex lg:text-xl">
                  <ResumeIcon fill="#F38B57" />
                  <span className="ml-2 hidden pt-1 md:block restoramedium">Resume</span>
                </a>
                <a
                  href="https://github.com/DoctorDerek"
                  className="text-lg text-[#311B4D] md:flex lg:text-xl"
                  target="_blank"
                >
                  <GithubIcon fill="#F38B57" />
                  <span className="ml-2 hidden pt-1 md:block restoramedium">Github</span>
                </a>
                <a
                  href="https://doctorderek.medium.com/"
                  className="text-lg text-[#311B4D] md:flex lg:text-xl"
                  target="_blank"
                >
                  <MediumIcon fill="#F38B57" />
                  <span className="ml-2 hidden pt-1 md:block restoramedium">Medium</span>
                </a>
                <a
                  className="text-lg text-[#311B4D] md:flex lg:xl"
                  href="https://www.amazon.com/dp/B0BRJDLJ43"
                  target="_blank"
                >
                  <BookLinkIcon fill="#F38B57" />
                  <span className="ml-2 hidden pt-1 md:block restoramedium">Book</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
