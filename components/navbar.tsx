import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Logo from "images/Logo.png"
import medLrgLogo from "images/medLrgLogo.svg"
import Link from "next/link"
import EmailIcon from "./emailIcon"
import LinkedinIcon from "./linkedinIcon"
import ResumeIcon from "./resumeIcon"
import GithubIcon from "./githubIcon"
import MediumIcon from "./mediumIcon"
import BookLinkIcon from "./bookLinkIcon"

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Experience", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Testimonials", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
]

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-[7vh] md:h-0">
      {/* ======== NAVBAR ======= */}
      <div className="sticky top-0 z-40 flex h-full bg-[#FFE366] shadow-sm sm:gap-x-6 sm:px-6 md:h-screen md:w-14 md:px-0">
        <div className="flex w-full md:flex-col">
          <div className="w-1/4 pl-3 pt-3 md:order-2 md:h-[40vh] md:w-full md:pl-0 md:pt-0">
            <Link href="/" className="md:block md:h-1/2 md:w-full md:pt-4">
              {/* Displays logo on small devices */}
              <Image
                src={Logo}
                object-fit="contain"
                alt="Logo"
                className="md:hidden"
              />
              {/* Displays logo on medium and large devices */}
              <Image
                src={medLrgLogo}
                alt="Logo"
                className="hidden md:mx-auto md:block"
              />
            </Link>
          </div>
          <button
            type="button"
            className="text-[#FFE366]md:mt-60 ml-auto bg-[#89cffd] px-3.5 pt-1 md:order-1 md:ml-0 md:py-3"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <XMarkIcon
                className="h-6 w-6 text-[#FFE366]"
                aria-hidden="true"
              />
            ) : (
              <Bars3Icon
                className="h-6 w-6 text-[#FFE366]"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
        {/* ======== SCROLL INDICATOR ======= */}
      </div>

      <div className="fixed inset-0 mt-auto flex h-[90%]">
        {/* =========== SIDEBAR MOBILE MENU =========== */}
        <div className="flex grow flex-col overflow-y-auto">
          {/* ========= div creates spacing between links and navbar */}
          <div className="h-14 md:hidden" />
          {/* =========== NAVIGATION LINKS ========== */}
          <nav
            className={`md:h-11/12 flex h-full flex-col rounded-tr-3xl duration-500 md:mt-auto md:flex-row ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } `}
          >
            <div className="flex h-full w-11/12 flex-col content-between rounded-tr-2xl bg-[#89cffd] pl-5 md:w-3/4">
              <ul role="list" className="pt-8">
                {navigation.map((item) => (
                  <li className="hover:text-white" key={item.name}>
                    <a
                      href={item.href}
                      className={
                        "md:restora-bold block py-2 text-5xl font-semibold md:p-1 md:pr-12 md:text-end md:text-7xl lg:text-8xl"
                      }
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Sidebar, displays icon links on small devices */}
              <div className="mt-auto w-10/12 pb-6 md:hidden">
                <div className="flex justify-between">
                  <a href="mailto:derekraustin@gmail.com">
                    <EmailIcon fill="white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/derek-austin/"
                    target="_blank"
                  >
                    <LinkedinIcon fill="white" />
                  </a>
                  <a href="">
                    <ResumeIcon fill="white" />
                  </a>
                  <a href="https://github.com/DoctorDerek" target="_blank">
                    <GithubIcon fill="white" />
                  </a>
                  <a href="https://doctorderek.medium.com/" target="_blank">
                    <MediumIcon fill="white" />
                  </a>
                  <a
                    href="https://www.amazon.com/dp/B0BRJDLJ43"
                    target="_blank"
                  >
                    <BookLinkIcon fill="white" />
                  </a>
                </div>
              </div>
            </div>
            {/* Displays icons in sidebar on medium and large devices */}
            <div className="mx-auto my-auto hidden flex-col justify-between gap-y-4 md:flex">
              <a className="mb-2 block" href="mailto:derekraustin@gmail.com">
                <EmailIcon fill="#F38B57" />
              </a>
              <a
                className="mb-2 block"
                href="https://www.linkedin.com/in/derek-austin/"
                target="_blank"
              >
                <LinkedinIcon fill="#F38B57" />
              </a>
              <a className="mb-2 block" href="">
                <ResumeIcon fill="#F38B57" />
              </a>
              <a
                className="mb-2 block"
                href="https://github.com/DoctorDerek"
                target="_blank"
              >
                <GithubIcon fill="#F38B57" />
              </a>
              <a
                className="mb-2 block"
                href="https://doctorderek.medium.com/"
                target="_blank"
              >
                <MediumIcon fill="#F38B57" />
              </a>
              <a
                className="mb-2 block"
                href="https://www.amazon.com/dp/B0BRJDLJ43"
                target="_blank"
              >
                <BookLinkIcon fill="#F38B57" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
